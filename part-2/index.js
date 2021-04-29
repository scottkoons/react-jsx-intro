// Part 2
// Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.;

// Create an App component that renders at least three tweets.

const App = () => {
    return (
        <div>
            <h2>Tweet 1:</h2>
            <Tweet username="fred" name="Bobo the Monkey Boy" date="Apr 28, 2021" message="This is my first tweet" />
            <h2>Tweet 2:</h2>
            <Tweet username="Start5050" name="Ned Stark" date="Apr 28, 205" message="I've lost my head!" />
            <h2>Tweet 3:</h2>
            <Tweet username="donkey123" name="Donkey Kong" date="Mar 10, 2021" message="Where is Mario's girlfriend?" />
        </div>
    );
};


ReactDOM.render(< App />, document.getElementById('root'));