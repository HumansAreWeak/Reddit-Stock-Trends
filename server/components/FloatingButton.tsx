import style from "./FloatingButton.module.css";

type FloatingButtonProps = {
    onClick: () => void;
};

const FloatingButton = (props: FloatingButtonProps) => {
    return (
        <div className={style.container}>
            <div className={style.button} onClick={() => props.onClick()}>
                <p>Pull new Data from Reddit</p>
            </div>
        </div>
    );
};

export default FloatingButton;