import parse from 'html-react-parser';

const SectionTitle2 = ({Title,SubTitle}) => {
    return (
        <div>
            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{parse(SubTitle)}</span>
            <h2 className="title tg-element-title">{parse(Title)}</h2>
        </div>
    );
};

export default SectionTitle2;