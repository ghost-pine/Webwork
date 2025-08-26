import parse from 'html-react-parser';

const SectionTitle = ({Title,SubTitle}) => {
    return (
        <div>
            <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> {parse(SubTitle)}</span>
            <h2 className="title tg-element-title">{parse(Title)}</h2>   
        </div>
    );
};

export default SectionTitle;