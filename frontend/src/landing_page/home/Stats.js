import React from 'react';

function Stats() {
    return (
        <div
            className="container"
            style={{
                padding: '70px 20px'
            }}
        >

            {/* TOP ROW */}
            <div
                className="row"
                style={{
                    alignItems: 'center'
                }}
            >

                {/* LEFT SIDE */}
                <div className="col-6">

                    <h1
                        style={{
                            fontSize: '32px',
                            fontWeight: '500',
                            color: '#424242',
                            marginBottom: '40px'
                        }}
                    >
                        Trust with confidence
                    </h1>

                    <div style={{ marginBottom: '30px' }}>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: '#424242',
                                marginBottom: '10px'
                            }}
                        >
                            Customer-first always
                        </h3>

                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.6',
                                color: '#555',
                                margin: 0
                            }}
                        >
                            That's why <b>1.6+ crore</b> customers trust Zerodha
                            with ~ ₹6 lakh crores of equity investments, making
                            us India’s largest broker; contributing to 15% of
                            daily retail exchange volumes in India.
                        </p>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: '#424242',
                                marginBottom: '10px'
                            }}
                        >
                            No spam or gimmicks
                        </h3>

                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.6',
                                color: '#555',
                                margin: 0
                            }}
                        >
                            No gimmicks, spam, "gamification", or annoying push
                            notifications. High quality apps that you use at
                            your pace, the way you like.

                            <a
                                href="#"
                                style={{
                                    color: '#387ed1',
                                    textDecoration: 'none',
                                    marginLeft: '5px'
                                }}
                            >
                                Our philosophies.
                            </a>
                        </p>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: '#424242',
                                marginBottom: '10px'
                            }}
                        >
                            The Zerodha universe
                        </h3>

                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.6',
                                color: '#555',
                                margin: 0
                            }}
                        >
                            Not just an app, but a whole ecosystem. Our
                            investments in 30+ fintech startups offer you
                            tailored services specific to your needs.
                        </p>
                    </div>

                    <div>
                        <h3
                            style={{
                                fontSize: '20px',
                                fontWeight: '500',
                                color: '#424242',
                                marginBottom: '10px'
                            }}
                        >
                            Do better with money
                        </h3>

                        <p
                            style={{
                                fontSize: '16px',
                                lineHeight: '1.6',
                                color: '#555',
                                margin: 0
                            }}
                        >
                            With initiatives like Nudge and Kill Switch, we
                            don't just facilitate transactions, but actively
                            help you do better with your money.
                        </p>
                    </div>

                </div>


                {/* RIGHT SIDE IMAGE */}
                <div
                    className="col-6"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        src="/media/images/ecosystem.png"
                        alt="Trust with confidence"
                        style={{
                            width: '90%',
                            maxWidth: '500px',
                            height: 'auto'
                        }}
                    />
                </div>

            </div>


            {/* KC CONNECT - FULL WIDTH */}
            <div
                className="row"
                style={{
                    marginTop: '80px',
                    textAlign: 'center'
                }}
            >

                <div className="col-12">

                    {/* KC LOGO */}
                    <img
                        src="/media/images/kc-logo-landing.svg"
                        alt="Kite Connect"
                        style={{
                            width: '180px',
                            height: 'auto',
                            marginBottom: '30px'
                        }}
                    />

                    {/* HEADING */}
                    <h3
                        style={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#424242',
                            marginBottom: '15px'
                        }}
                    >
                        Need more?
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#555',
                            maxWidth: '750px',
                            margin: '0 auto 15px'
                        }}
                    >
                        Build your own trading and investing experience with
                        Kite Connect, simple HTTP APIs to place orders, stream
                        market data, manage your account, and more.
                    </p>

                    {/* EXPLORE LINK */}
                    <a
                        href="https://zerodha.com/products/api"
                        style={{
                            color: '#387ed1',
                            textDecoration: 'none',
                            fontSize: '16px'
                        }}
                    >
                        Explore →
                    </a>

                </div>

            </div>

        </div>
    );
}

export default Stats;
