export default async function callAnApi() {
    let response = undefined;
    await new Promise(resolve =>
        setTimeout(() => {
            response = {data: "some data"}
            resolve();
        }, 5000)
    )
    return response;
}