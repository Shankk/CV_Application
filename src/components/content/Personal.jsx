function Personal({name = "Brian Viveiros",email = "coolman123@gmail.com",
    phone = "123-456-7890",address = "123 Fake Street"}) {

    const personalStyle = {
        color: "red",
        fontSize: 12
    };

    return (
        <div className="personalContent">
            <h1>{name}</h1>
            <p>{email} {phone} {address}</p>
        </div>
    )
}

export {Personal}