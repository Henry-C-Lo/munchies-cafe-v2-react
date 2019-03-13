import React from 'react'

const Intro = () => {
    return (
        <div>
            <section className="intro">
                <div className="container">
                    <ul className="list-group text-center font-weight-light text-color">
                        <li className="slogan list-group-item w-50 d-block mx-auto my-5 font-weight-normal">
                            Celebrating the
                            <em> finest New American cuisine</em>
                            for an exceptional and relaxed dining experience
                            <em> near Taipei Arena</em>
                        </li>
                        <div className="dropdown-divider w-50 d-block mx-auto"></div>
                        <li className="list-group-item pt-5">
                            No. 26, Alley 5, Lane 12, Section 3, Bade Road, Songshan District, Taipei City, Taiwan
                        </li>
                        <li className="list-group-item">Taipei Arena MRT station</li>
                        <li className="list-group-item">open seven days a week</li>
                        <li className="list-group-item">11:30am ∼ 10:00PM</li>
                        <li className="list-group-item pb-5">02-25705508</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Intro