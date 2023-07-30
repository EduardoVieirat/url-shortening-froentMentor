import './style.css'

export default function Shortner() {
    return (
        <section className="shortner-section"> 

            <input className='input-shortner' type="text" placeholder="Shorten a link here..."/>

            <button className='btn-shortner'>Shorten It!</button>

        </section>
    )
}