import React from 'react';
import "./Story.scss";

export default class Story extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blur: true,
        }
    }

    showSpoiler = () => {
        let blur = this.state.blur
        this.setState(
            {
                blur: !blur
            }
        )
    }


    render() {
        return (
            <article className="Story">
                <div className="story-section">
                    <h2 className="story-section__title">Historia</h2>
                    <span className={`story-section__warning ${this.state.blur ? "" : "story-section__warning--unactive"}`}>UWAGA! Poniżej mogą znajdowac się spoilery!</span>
                    <button className={`story-section__button ${this.state.blur ? "" : "story-section__button--clicked"}`} onClick={this.showSpoiler}>
                    POKAŻ ZAWARTOŚĆ
                    
                    </button>
                    <section className={`story-section__desc ${this.state.blur ? "story-section__desc--blurred" : "story-section__desc--clean"}`}>
                        <h3>Młodość</h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies eu nulla id lacinia. M
                        auris vulputate vel ante vitae dapibus. Morbi dapibus, purus sed iaculis pulvinar, est velit rho
                        ncus elit, nec dapibus neque sem ac metus. Maecenas sit amet ligula vestibulum, euismod quam non
                        , lobortis urna. Donec v
            <br />

                        <h3>Okres nastoletni</h3>

                        arius fringilla leo, venenatis tempus massa porta at. Nulla ac libero vive
                        rra, sagittis leo in, dictum orci. Fusce fringilla, nunc sed porttitor placerat, sem elit molestie sa
                        pien, in elementum massa magna id risus. In placerat euismod lacus et mattis. Ut pretium fringilla m
                        i molestie ultrices. Phasellus rhoncus vestibulum suscipit. Nulla elit leo, convallis ac iaculis eget
                        , porta vitae sem.
            <br />
                        <h3>Dorosłość</h3>

                        Nulla placerat purus id mauris molestie pellentesque. Quisque ut tincidunt nulla. Cras convallis
                            ut lorem vitae vulputate. Aliquam a pellentesque nulla. Nam suscipit gravida vulputate. Aliquam dictum
                            auctor dolor. Integer quis lorem egestas ante porta congue ac non orci. Morbi sit amet mi ut lorem viver
                         ra sodales sit amet eu neque.
            </section>
                </div>

            </article>
        )
    }
}