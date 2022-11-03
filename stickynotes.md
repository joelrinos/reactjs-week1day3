# Sticky Notes

References :
https://www.sitepoint.com/using-regular-expressions-to-check-string-length/ \
https://www.tutorialspoint.com/regex-in-reactjs \
https://www.javacodegeeks.com/reactjs-form-validation-example.html#:~:text=ReactJS%20Form%20Validation%20Example%201%201.%20Tools%20and,5%205.%20Download%20the%20Source%20Code%20Download%20 \
https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react \
https://dev.to/isabelxklee/understanding-inverse-data-flow-in-react-3cg7 \
https://medium.com/@jesskim11/inverse-data-flow-in-react-a877f3b3bf85 \

this.setState(prevState => ({
    errorMessage: {                   // object that we want to update
        ...prevState.errorMessage,    // keep all other key-value pairs
        email2: 'test3'       // update the value of specific key
    }
}))