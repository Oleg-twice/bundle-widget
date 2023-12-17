import { act, renderHook } from '@testing-library/react';
import { useSimpleImage } from './useSimpleImage';
import { SyntheticEvent } from 'react';

const mockOnError = jest.fn();
const mockOnLoad = jest.fn();

describe('useSimpleImage', () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  const event = { currentTarget: { src: '' } } as SyntheticEvent<HTMLImageElement, Event> 

  it('onErrorHandler should work correctly', () => {
    const { result } = renderHook(() => useSimpleImage({
      fallbackSrc: 'fallbackSrc',
      src: 'mainsrc',
      onError: mockOnError,
      onLoad: mockOnLoad,
    }));

    act(() => {
      result.current.onErrorHandler(event);
    })

    expect(mockOnError).toHaveBeenCalled();
    expect(result.current.isError).toBeTruthy();
  });

  it('onErrorHandler should work correctly', () => {
    const { result } = renderHook(() => useSimpleImage({
      fallbackSrc: 'fallbackSrc',
      src: 'mainsrc',
      onError: mockOnError,
      onLoad: mockOnLoad,
    }));

    act(() => {
      result.current.onLoadHandler(event);
    })

    expect(mockOnLoad).toHaveBeenCalled();
    expect(result.current.loaded).toBeTruthy();
  });
});
