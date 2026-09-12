function Background() {
    return (
        <div className="background">
            <video autoPlay muted loop id="bgVideo">
                <source src="/src/assets/bg.webm" type="video/webm" />
            </video>
        </div>
    )
}

export default Background