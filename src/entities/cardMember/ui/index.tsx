import React, { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

type CardMemberProps = {};

export const CardMember: FC<CardMemberProps> = () => {
	return (
		<div className={styles.wrap}>
			<div className={styles.avatar}>
				{/* <Image
					className={styles.image}
					src="/otto.png" 
					width={150}
					height={190}
					alt="Picture of the author"
				/> */}
			</div>
			<div className={styles.name}>Otto Kustler</div>
			<div className={styles.skills}>
				JS/TS/React/
				<br />
				Next.js/Node.js
			</div>
		</div>
	);
};
