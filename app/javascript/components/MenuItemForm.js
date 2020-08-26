import React, { Fragment, useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MenuItemForm = ({
	items,
	setItemFormVisibility,
	addItem,
	restaurant
}) => {

	const [ imageData, setImageData ] = useState([])


	const [ item, setItem ] = useState({
		name: '',
		description: '',
		price: ''
	})

	const handleInputChange = e => {
		setItem({...item, [e.target.name]: e.target.value})
	}

	const { name, description, price } = item;

	// const submitFormOnEnter = e => {
	// 	if (e.key === 'Enter') {
	// 		addItem(nameData, unitsData, categoryData, restaurant)
	// 	}
	// }

	// const newCategoryChecker = e => {

	// 	let result = categoryList.filter(category => 
	// 		category.title.toLowerCase() == e.target.value.toLowerCase()
	// 		)

	// 	setSelectedCategory(result)

	// 	if (result.length > 0 || e.target.value == '') {
	// 		setNewCategory(false)

	// 	} else {
	// 		setNewCategory(true)
	// 	}
	// }

	// const handleCategoryChange = e => {
	// 	setCategoryData(e.target.value)

	// 	newCategoryChecker(e)

	// }


	// const handleAddAttribute = e => {
	// 	e.preventDefault()
	// 	let selectedAttribute = trackableAttributeList.filter(
	// 		attribute => attribute.name.toLowerCase() == newAttribute.toLowerCase()
	// 	)
	// 	if (selectedAttribute.length > 0) {
	// 		setAttributesData([...attributesData, selectedAttribute[0]])
	// 	} else {
	// 		setAttributesData([...attributesData, Object.assign({}, {name: newAttribute})])
	// 	}
		
	// 	setNewAttribute('')

	// }

	// const handleRemoveAttribute = e => {

	// 	setAttributesData(attributesData.filter(attribute => attribute.name != e.currentTarget.id))
	// }

	// const itemNameErrorHandler = () => {
	// 	setItemNameError('Invalid item name length, name can be up to 64 characters.')
	// 	document.getElementById('itemNameField').classList.add('invalid-error-frame')
	// }

	// const unitErrorHandler = () => {
	// 	setUnitsError('Invalid units name length, units can be up to 32 characters.')
	// 	document.getElementById('unitField').classList.add('invalid-error-frame')
	// }

	// const categoryErrorHandler = () => {
	// 	setCategoryError('Please select a category above or create a new one.')
	// 	document.getElementById('categoryField').classList.add('invalid-error-frame')
	// }

	// const attributeErrorHandler = () => {
	// 	setAttributesError('You need to choose at least one attribute to track for this new category.')
	// 	document.getElementById('attributeField').classList.add('invalid-error-frame')
	// }

	// const newAttributeErrorHandler = () => {
	// 	setNewAttributeError('Invalid attribute name length, name can be up to 64 characters')
	// 	document.getElementById('attributeField').classList.add('invalid-error-frame')
	// }

	const validate = () => {
	// 	// we'll define a function to validate the form
	// 	const nameValid = nameData.length > 1 && nameData.length < 64
	// 	const unitsValid = unitsData.length > 1 && unitsData.length < 64
	// 	const categoryValid = selectedCategory.length === 1 || categoryData != ''


	// 	if (!nameValid) {
	// 		itemNameErrorHandler()
	// 	}

	// 	if (!unitsValid) {
	// 		unitErrorHandler()
	// 	}

	// 	if (newCategory && attributesData.length === 0) {
	// 		attributeErrorHandler()
	// 	}

	// 	if (!categoryValid) {
	// 		categoryErrorHandler()
	// 	}

	// 	if (!unitsValid || !nameValid || !categoryValid || newCategory && attributesData.length === 0) {
	// 		return false
	// 	}

		return true

	}

	// const handleSelect = e => {
	// 	setCategoryError('')
	// 	document.getElementById('categoryField').classList.remove('invalid-error-frame')
	// }

	const handleSubmit = e => {
		e.preventDefault()
		
		const isValid = validate()

		if (isValid) {

			const formData = new FormData();
			formData.append('[item]name', name)
			formData.append('[item]description', description)
			formData.append('[item]price', price)
			formData.append('[item]image', imageData[0])
			


			addItem(formData, restaurant)	
		}
		
		
	}

	

	return (
			<Container className='p-4'>

				<h6 className='section-name pt-4 pt-md-0'>
					{items.length === 0 ? 
						"You have no menu items yet. Let's get started." 
						: "Add new item"
					}
				</h6>
				<Form 
					// onKeyPress={submitFormOnEnter} 
					onSubmit={handleSubmit}
					className='pt-5 pt-md-3'>
					<Form.Row>
						<Form.Label>
							Image
						</Form.Label>
					</Form.Row>
					<ImageUploader
						imageData={imageData}
						setImageData={setImageData} />
					<Form.Row>
						<Col xs={10}>
							<Form.Label>
								Item name
							</Form.Label>
							<Form.Control
								name='name' 
								type='text'
								placeholder='Enter menu item name'
								value={name}
								onChange={handleInputChange}
								/>
							{/*<span style={{'color':'red'}}>{nameError}</span>*/}
						</Col>

						<Col xs={2}>
							<Form.Label className='align-right'>
								Price
							</Form.Label>
							<Form.Control
								 name='price'
								 type='number'
								 min='1'
								 step='any'
								 placeholder='$0.00'
								 onChange={handleInputChange}
								 value={price}
								 />
						</Col>
					</Form.Row>
					<Form.Row>
						<Col xs={12}>
							<Form.Label>
								Item description
							</Form.Label>
							<Form.Control
								name='description'
								as='textarea'
								placeholder='Write a short description of the item '
								value={description}
								onChange={handleInputChange}
								/>
							{/*<span style={{'color':'red'}}>{descriptionError}</span>*/}
						</Col>
					</Form.Row>


					<Form.Row className='pt-2'>
						<div className='ml-auto'>
							

							
							<Button 
								className='mr-1' 
								variant='danger'
								onClick={()=>{setItemFormVisibility(false)}} 
							>
								Cancel
							</Button>
							<Button type='submit'>
								Add new item
							</Button>
						</div>
					</Form.Row>
				</Form>
			</Container>
		)
}

export default MenuItemForm