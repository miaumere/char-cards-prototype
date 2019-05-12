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
                    <section className={`story-section__desc ${this.state.blur ? "story-section__desc--blurred" : ""}`}>
                    {this.props.history}
                    </section>
                </div>

            </article>
        )
    }
}