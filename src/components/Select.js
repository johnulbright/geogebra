import React, { useState } from 'react';
import {Button,Form,FormGroup,Label,Input,FormText} from 'reactstrap'

import "./Select.css"

const Select=()=>{
    const [grades,setGrades]=useState([]);
    const [strands,setStrands]=useState([])
    const [startDate,setStartDate]=useState('')
    const [endDate,setEndDate]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    return(
        <Form className="select-option" type='submit' onClick={handleSubmit}>
            <FormGroup htmlFor="grades">
                <Label for="selectGrades">Grade(s)</Label>
                <Input className="selector" type ="select" name="selectMultGrades" id="grades" multiple>
                    <option>PK</option>
                    <option>K</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>HS</option>
                    <option>Just for fun</option>
                </Input>
            </FormGroup>
            <FormGroup htmlFor="strands">
                <Label for="selectStrands">Strand(s)</Label>
                <Input className="selector" type ="select" name="selectMultStrands" id="strands" multiple>
                    <option>Number Sense</option>
                    <option>Computation/Algebraic Thinking/Functions</option>
                    <option>Geometry/Measurement</option>
                    <option>Data Analysis/Statistics</option>
                </Input>
            </FormGroup>
        </Form>
    )

}

export default Select;