FROM public.ecr.aws/docker/library/amazoncorretto:17.0.9 AS core

ARG FD_VERSION=8.0-SNAPSHOT
ENV ENV_TYPE="" \
    VERSION=${SONARCLOUD_VERSION} \
    HOME=/opt/fd \
    JDBC_USERNAME=fd \
    JDBC_PASSWORD=fd \
    JDBC_URL="jdbc:postgresql://localhost/fd" \
    JWT_BASE64_HS256_SECRET=""

RUN yum install -y jq shadow-utils unzip \
  && yum clean all \
  && rm -rf /var/cache/yum

# Http port
EXPOSE 9000
EXPOSE 9001

RUN groupadd -r fd && useradd -r -g fd fd

SHELL ["/bin/bash", "-c"]
COPY sonarqube-${VERSION} $HOME
RUN chown -R fd:fd $HOME \
    && rm -rf $HOME/bin/*

VOLUME "$HOME/data"

COPY run.sh $HOME/bin/

WORKDIR $HOME

USER fd
ENTRYPOINT ["./bin/run.sh"]

# BOM file is generated in build.sh from core stage image before this final stage
FROM core
COPY bom.json bom.json.asc ./
