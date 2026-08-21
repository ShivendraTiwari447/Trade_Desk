import React from 'react';

function Awards() {
    return (
        <div
            className="container"
            style={{
                padding: '60px 20px'
            }}
        >
            <div
                className="row"
                style={{
                    alignItems: 'center'
                }}
            >
                <div
                    className="col-6"
                    style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src="/media/images/largestBoker.svg"
                        alt="Largest Book"
                        style={{
                            width: '80%',
                            maxWidth: '450px',
                            height: 'auto'
                        }}
                    />
                </div>

                <div
                    className="col-6"
                    style={{
                        paddingLeft: '30px'
                    }}
                >
                    <h1
                        style={{
                            fontSize: '32px',
                            fontWeight: '500',
                            marginBottom: '20px',
                            color: '#424242'
                        }}
                    >
                        Free and open market education
                    </h1>

                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#555',
                            marginBottom: '20px'
                        }}
                    >
                        Varsity, the largest online stock market education book
                        in the world covering everything from the basics to
                        advanced trading.
                    </p>

                    <ul
                        style={{
                            paddingLeft: '20px',
                            margin: 0
                        }}
                    >
                        <li style={{ marginBottom: '10px' }}>
                            <a
                                href="#"
                                style={{
                                    color: '#387ed1',
                                    textDecoration: 'none'
                                }}
                            >
                                Varsity
                            </a>
                        </li>

                        <li>
                            <p
                                style={{
                                    fontSize: '15px',
                                    lineHeight: '1.5',
                                    color: '#555',
                                    margin: 0
                                }}
                            >
                                TradingQ&A, the most active trading and
                                investment community in India for all your
                                market related queries.
                            </p>
                        </li>

                        <li style={{ marginTop: '10px' }}>
                            <a
                                href="#"
                                style={{
                                    color: '#387ed1',
                                    textDecoration: 'none'
                                }}
                            >
                                Trading Q_A
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Awards;