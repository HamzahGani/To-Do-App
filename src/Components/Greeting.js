const Greeting = () => {
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        color: "lightblue",
        backgroundColor: "black"
    }

    if (hours <12) {
        timeOfDay="morning";
        styles.color = "lightblue";
    } else if (hours<17) {
        timeOfDay="afternoon";
        styles.color = "lime";
    } else{
        timeOfDay="night";
        styles.color="orange";
    }

    return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
    )
}

export default Greeting;
