interface Props {
    mainText: string;
    subText?: string;
}

function Title({ mainText, subText }: Props) {
    return (
        <h1 className="text-xl-center m-4">
            {mainText}<br />
            {subText &&
                <small className="text-muted">
                    {subText}
                </small>
            }
        </h1>
    );
}

export default Title;
