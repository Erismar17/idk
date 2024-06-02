import './App.css';
import avatar from './assets/avatar.png';
import img from './assets/Electronics 01.png';

const ReportView = () => {
    return (
        <div>
            <header className="header">
                <p>Globant</p>
                <input placeholder="Search"/>
                <img src={avatar} alt=''/>
            </header>

            <section className='list'>
                <h1>Recent Products</h1>
                <div className='product'>
                    <div className='sub-product'>
                        <img src={img} alt=''/>
                        <div className='description-product'>
                            <h3>Dell 49# Ultrawide</h3>
                            <p className='prices'>$65.99 <span className='span1'>$79.99</span><span>⭐5.0</span></p>
                        </div>
                    </div>
                    <div className='buttons-product'>
                        <span class="material-symbols-outlined circle-span">favorite</span>
                        <span class="material-symbols-outlined circle-span">flag</span>
                        <div className='mail'>
                            <p>example@globant.com</p>
                            <span class="material-symbols-outlined circle-span">content_copy</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ReportView;