import handler from "../api/simulate";

const mockRequest = (body) => ({
  method: "POST",
  body
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test("simulate api returns a bracket", async () => {
  const req = mockRequest({
    series_results: {
      Eastern_1: { team_a: 4, team_b: 2 },
      Western_1: { team_a: 3, team_b: 4 }
    }
  });
  const res = mockResponse();

  await handler(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith(
    expect.objectContaining({ simulated_bracket: expect.any(Object) })
  );
});