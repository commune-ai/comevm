import React from "react";

const CurrencyItem = ({ image, label, isSelected, onClick }) => {

    const borderColorClass = isSelected ? 'tw-border-black' : '#a5aaae';

    const textColor = isSelected && '#fff';

    const fontSize = isSelected && '19px';

    const backgroundColor = isSelected && '#6db1ff';
    // const boxShadow = isSelected ? '' :'rgb(109 177 255 / 98%) 1.5px 1.5px 1.5px 1.5px';

    return (
        <React.Fragment>

            <div
                className={` dark:tw-text-white tw-transition-[1s] dark:tw-shadow-none dark:tw-border-none tw-flex tw-flex-row tw-justify-center tw-items-center tw-rounded-[0.5rem] tw-w-[45%] tw-p-2 tw-bg-[#fff] dark:tw-bg-[rgb(30,31,34)] dark:tw-hover:bg-[rgb(49,51,56)] hover:tw-bg-[#6db1ff] tw-cursor-pointer ${borderColorClass}`}
                onClick={onClick}
                style={{ boxShadow: 'rgb(109 177 255 / 98%) 1.5px 1.5px 1.5px 1.5px', backgroundColor }}
            >
                <img alt={label} fetchpriority="high" width="20" height="20" decoding="async" data-nimg="1" src={image} />
                <span style={{ textColor, fontFamily: 'Smack', fontSize }} className="ml-2">{label}</span>
            </div>
        </React.Fragment>

    );
}
// CurrencyItem.propTypes = {
//     image: PropTypes.str,
//     label: PropTypes.str,
//     isSelected: prototype,
//     onClick: PropTypes,
//   };
export default CurrencyItem;
