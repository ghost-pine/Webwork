import parse from 'html-react-parser';

const SectionTitle3 = ({Title,SubTitle,content}) => {
    return (
        <div>
            <span className="span" data-aos="zoom-in-left" data-aos-duration="700">{parse(SubTitle)}</span>
            <h2 className="tg-element-title">{parse(Title)}</h2>
            <div className="space16"></div>
            <p> {parse(content)}</p>
        </div>
    );
};

export default SectionTitle3;