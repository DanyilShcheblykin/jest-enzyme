
const add = (a: number, b: number) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (a > b) {
                rej("Number shouldnt be negative")
            } else {
                res(a + b)
            }
        }, 2000);
    })
}



describe("Shoud return sum of numbers", () => {
    it("return sum", (done) => {
        add(3, 2).then(res => {
            expect(res).toBe(4)
            done()

        })
    })
})

// ----------------------------------------------------------------------------

function forEach(items: Array<any>, callback: (item: number) => void) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

const mockCallback = jest.fn(x => 42 + x);

test('forEach mock function', () => {
    forEach([0, 1], mockCallback);

    // The mock function was called twice
    expect(mockCallback.mock.calls).toHaveLength(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);
});


// ----------------------------------------------------------------------------


// function that makes a fetch request and returns the response as JSON
async function fetchData(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  // test case for fetchData function
 
  describe('fetchData', () => {
    it('returns the response data as JSON', async () => {
      const mockResponse = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      const mockFetchPromise = Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      } as unknown as Response);
      jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  
      const result = await fetchData('https://example.com/api/user/1');
      expect(result).toEqual(mockResponse);
  
      jest.spyOn(global, 'fetch').mockReset();
    });
  });