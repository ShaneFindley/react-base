import { renderHook } from "@testing-library/react";
import { useTestingMock } from "../testing-mock";

jest.mock('axios-hooks');
import mockFn from 'axios-hooks';

describe('useTestingMock', () => {

    it('should return false', () => {
        const mock = jest.mocked(mockFn, true) as jest.Mock;
        mock.mockImplementation(() => {
            return [{ data: false, loading: false, error: null, response: undefined }];
        });

        const { result } = renderHook(() => useTestingMock());
        expect(result.current).toEqual(false);
    });

    it('should return true', () => {
        const mock = jest.mocked(mockFn, true) as jest.Mock;
        mock.mockImplementation(() => {
            return [{ data: true, loading: false }];
        });

        const { result } = renderHook(() => useTestingMock());
        
        expect(result.current).toEqual(true);
    });
})