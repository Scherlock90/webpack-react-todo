import * as React from 'react';

export default function HomePage() {
    const title = <h1 className="main-title"> WebPack custom configuration </h1>;
    return (
        <div className="container-home-page">
            {title}
        </div>
    )
}