import {render, screen, waitFor} from "@testing-library/react";
import LoaderWithAPICall from "./LoaderWithAPICall";
import callAnApi from "./api";

jest.mock('./api', () => (
    jest.fn()
))
describe('<LoaderWithAPICall />', () => {
    beforeEach(() => {
        callAnApi.mockResolvedValue({data: "testData"})
    })
    it('renders the loader initially', async () => {
        render(<LoaderWithAPICall/>)
        await waitFor(() => expect(screen.getByText(/Loading.../i)).toBeInTheDocument());
    })

    it('renders the data after promise resolves', async () => {
        render(<LoaderWithAPICall/>)

        expect(callAnApi).toHaveBeenCalledTimes(1);
        await waitFor(() => {
            expect(screen.getByText("Data obtained from API call: testData")).toBeInTheDocument();
        })
    })
});