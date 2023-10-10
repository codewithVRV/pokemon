function useDebounce (callback, delay=2000) {
    let timerId;
        return (...args) => {
            clearTimeout(timerId)
            setTimeout(() => {
                callback(...args)
            }, delay)
        }
}

export default useDebounce;