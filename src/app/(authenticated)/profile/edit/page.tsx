"use client";
import Input from "@/components/ui/input";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import React from "react";

const EditProfile = () => {
	const [editMode, setEditMode] = React.useState('Edit');
	function toggleEditMode () {
		setEditMode(editMode === 'Save' ? 'Edit' : 'Save');
	}
	return (
		<>
			<PageTitle
				title='Edit profile'
				actions={<Button onClick={toggleEditMode}>{editMode}</Button>}/>
			<div>
				<Input disabled={editMode === 'Edit'} label="LinkedIn" type="url" placeholder="LinkedIn"/>
				<Input disabled={editMode === 'Edit'} label="Github" type="url" placeholder="GitHub"/>
				<Input disabled={editMode === 'Edit'} label="CV" type="file" multiple/>
			</div>
		</>
	);
};
export default EditProfile;