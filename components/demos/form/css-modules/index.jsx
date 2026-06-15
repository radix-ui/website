import * as React from "react";
import { Form } from "radix-ui";
import styles from "./styles.module.css";

const FormDemo = () => (
	<Form.Root className={styles.Root}>
		<Form.Field className={styles.Field} name="email">
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
				}}
			>
				<Form.Label className={styles.Label}>Email</Form.Label>
				<Form.Message className={styles.Message} match="valueMissing">
					Please enter your email
				</Form.Message>
				<Form.Message className={styles.Message} match="typeMismatch">
					Please provide a valid email
				</Form.Message>
			</div>
			<Form.Control asChild>
				<input className={styles.Input} type="email" required />
			</Form.Control>
		</Form.Field>
		<Form.Field className={styles.Field} name="question">
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
				}}
			>
				<Form.Label className={styles.Label}>Question</Form.Label>
				<Form.Message className={styles.Message} match="valueMissing">
					Please enter a question
				</Form.Message>
			</div>
			<Form.Control asChild>
				<textarea className={styles.Textarea} required />
			</Form.Control>
		</Form.Field>
		<Form.Submit asChild>
			<button className={styles.Button} style={{ marginTop: 10 }}>
				Post question
			</button>
		</Form.Submit>
	</Form.Root>
);

export default FormDemo;
