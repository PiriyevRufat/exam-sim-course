import React, { useContext } from 'react';
import { Formik } from "formik";
import axios from "axios";
import MainContext from '../../../context/context';
import Table from '../../../components/admin/Table/Table';

const AddPage = () => {
  const { data, setData } = useContext(MainContext);

  return (
    <div className="add-page-sect">
      <Formik
        initialValues={{ image: "", title: "", name: "", price: "" }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            axios.post("http://localhost:8080/", values)
            .then(res => {
                setData([...res.data])
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="image..."
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              placeholder="title..."
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <input
              type="text"
              placeholder="price..."
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {errors.price && touched.price && errors.price}
            <input
              type="text"
              placeholder="name..."
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Table items={data} />
    </div>
  );
}

export default AddPage;