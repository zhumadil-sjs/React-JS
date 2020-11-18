import './style.scss';
import leaf from '../../assets/leaf-8.png';
import arrow from '../../assets/arrow-right.svg';

const Subscribe = () => {
    return (
        <section className='subscribe'>
            <div className='container'>
                <div className='subscribe__content row'>
                    <div className='col-6'>
                        <h2 className='subscribe__title title'>Subscribe to our newsletter</h2>
                        <p className='subscribe__subtitle subtitle'>Send me your email address</p>
                        <p className='subscribe__description description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                        <div className="subscribe__link">
                            <input placeholder='YOUR EMAIL' className='subscribe__input'></input>
                            <a href="#" className="subscribe__btn"> <img src={arrow} className="subscribe__btn--img"/> </a>
                            </div>
                    </div>
                    <div className='col-6'>
                        <div className='subscribe__square'>
                            <img src={leaf} className='subscribe__decor'></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Subscribe;
