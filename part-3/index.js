function App() {
    return (
        <div>
            <Person
                name="Bobo"
                age={8}
                hobbies={["watching monkeys", "sleeping", "dping pong"]}
            />
            <Person
                name="Ned Stark"
                age={44}
                hobbies={["Cutting people's heads off", "Other hand duties"]}
            />
            <Person
                name="John Snow"
                age={18}
                hobbies={["Freezing", "Riding dragons"]}
            />
            <Person
                name="Tyrian"
                age={55}
                hobbies={["drinking", "drinking", "drinking"]}
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));