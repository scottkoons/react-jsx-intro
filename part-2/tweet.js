const Tweet = (props) => {
    return (
        <div>
            <div><b>Username: </b> {props.username}</div>
            <div><b>Name: </b> {props.name}</div>
            <div><b>Date: </b> {props.date}</div>
            <div><b>Message: </b> {props.message}</div>
        </div>
    );
};
// const Tweet = () => {
//     const tweets = [
//         {
//             id: 1,
//             username: "Bobo93",
//             name: "Bobo Monkey Boy"
//         },
//         {
//             id: 2,
//             username: "Monkeybreath29",
//             name: "Don Know"
//         }
//     ];
//     return (
//         <ul>
//             <b>Tweets</b>
//             { tweets.map(t => <li>Tweet {t.id}</li>)}
//             { tweets.map(t => <li>{t.username}</li>)}
//             { tweets.map(t => <li>{t.name}</li>)}
//         </ul>
//     );
// };