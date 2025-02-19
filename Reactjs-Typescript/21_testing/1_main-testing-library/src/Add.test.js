



describe("ADD", () => {
    const add = jest.fn((x,y)=>x+y);
    test("Add the function",async () => {
      await add();
      await add();
      expect(add).toHaveBeenCalledTimes(2);
    });
  });
  
