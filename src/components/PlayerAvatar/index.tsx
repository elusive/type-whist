import * as React from "react";
import * as styles from "./style.css";

export interface PlayerAvatarProps {
    name: string;
}

export const PlayerAvatar = (props: PlayerAvatarProps) => {
    const [name] = React.useState<string>(props.name);

    let i = Math.ceil(Math.random() * 4);
    let faceUrl = `../../assets/images/male-face-${i}.png`;

    return (
        <div className={styles.avatar}>
            <figure>
                <img src={faceUrl} />
                <figcaption>{name}</figcaption>
            </figure>
        </div>
    );
};
