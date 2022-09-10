import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const searchSchema = Yup.object().shape({
  searchMovie: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long')
    .required('Required'),
});

const Search = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ searchMovie: '' }}
      onSubmit={onSubmit}
      validatorSchema={searchSchema}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="searchMovie">
            {errors.searchMovie && touched.searchMovie ? (
              <div>{errors.searchMovie}</div>
            ) : null}
          </Field>
          <button type="submit">Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default Search;

Search.propType = {
  onSubmit: PropTypes.func.isRequired,
};