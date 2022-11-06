function Welcome({ name }) {
    return (
        <div>
            <h1>Hi{name}</h1>
        </div>
    );

}

function Double(n) {
    return n * 2;
}

export { Welcome, Double }