import React from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup';
import './style.css'
import {useDispatch, useSelector} from "react-redux";
import PackageItem from "../packageItem";


function PostalForm() {
    const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

    const dispatch = useDispatch()
    const {packageList} = useSelector(state => state)

    const formik = useFormik({
        initialValues: {
            senderName: '',
            senderTel: '',
            senderAddress: '',

            destinationName: '',
            destinationTel: '',
            destinationAddress: '',

            departure: 'Обычное',
            packageWeight: 0,
            insurance: false,

            length: 0,
            width: 0,
            height: 0,

        }, validationSchema: Yup.object({
            senderName: Yup.string().required('обязательное поле'),
            senderTel: Yup.string()
                .matches(phoneRegExp, 'неправильно набран номер')
                .required('обязательное поле')
                .min(10, "слишком короткий номер")
                .max(10, "номер слишком длинный"),
            senderAddress: Yup.string().required('обязательное поле'),

            destinationName: Yup.string().required('обязательное поле'),
            destinationTel: Yup.string()
                .matches(phoneRegExp, 'неправильно набран номер')
                .required('обязательное поле')
                .min(10, "слишком короткий номер")
                .max(10, "номер слишком длинный"),
            destinationAddress: Yup.string().required('обязательное поле'),

            packageWeight: Yup.number().max(100, 'Посылка не може весить больше 100 кг.').positive('Вес не должен быть отрицательным'),

            length: Yup.number().max(100, 'недопустимая длина').positive('Не может быть отрицательной'),
            width: Yup.number().max(100, 'недопустимая ширина').positive('Не может быть отрицательной'),
            height: Yup.number().max(100, 'недопустимая высота').positive('Не может быть отрицательной'),
        }),

        onSubmit: (values) => {
            dispatch({type: "addPackage", payload: {id: Math.random(), ...values}})
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="postal-form">
                <h2>Форма почтового отправления</h2>
                <div className='wrapper'>
                    <label>Отправитель</label>
                    <div className="input-wrapper">
                        <div>
                            <input id="senderName" type='text' placeholder='Имя' value={formik.values.senderName}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.senderName && formik.touched.senderName && (
                                <p>{formik.errors.senderName}</p>)}
                        </div>
                        <div>
                            <input id="senderTel" type='tel' placeholder='Телефон' value={formik.values.senderTel}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.senderTel && formik.touched.senderTel && (<p>{formik.errors.senderTel}</p>)}
                        </div>
                        <div>
                            <input id="senderAddress" type='text' placeholder='Адрес'
                                   value={formik.values.senderAddress}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.senderAddress && formik.touched.senderAddress && (
                                <p>{formik.errors.senderAddress}</p>)}
                        </div>

                    </div>
                </div>
                <div className='wrapper'>
                    <label>Получатель</label>
                    <div className="input-wrapper">
                        <div>
                            <input id="destinationName" type='text' placeholder='Имя'
                                   value={formik.values.destinationName}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.destinationName && formik.touched.destinationName && (
                                <p>{formik.errors.destinationName}</p>)}
                        </div>
                        <div>
                            <input id="destinationTel" type='tel' placeholder='Телефон'
                                   value={formik.values.destinationTel}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.destinationTel && formik.touched.destinationTel && (
                                <p>{formik.errors.destinationTel}</p>)}
                        </div>
                        <div>
                            <input id="destinationAddress" type='text' placeholder='Адрес'
                                   value={formik.values.destinationAddress}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.destinationAddress && formik.touched.destinationAddress && (
                                <p>{formik.errors.destinationAddress}</p>)}
                        </div>
                    </div>
                </div>
                <div className='wrapper'>
                    <label htmlFor="departure">Тип отправления</label>
                    <select id="departure"
                            value={formik.values.departure}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                    >
                        <option value='Обычное'>Обычное</option>
                        <option value='Заказное'>Заказное</option>
                        <option value='Срочное'>Срочное</option>
                    </select>
                </div>
                <div className="wrapper">
                    <label>Вес отправления (кг)</label>
                    <input
                        id="packageWeight"
                        className="package-weight"
                        type="number"
                        placeholder="Вес отправления"
                        value={formik.values.packageWeight}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.packageWeight && formik.touched.packageWeight && (
                        <p>{formik.errors.packageWeight}</p>)}
                </div>
                <div className="wrapper">
                    <label>Габариты (см)</label>
                    <div className="input-wrapper">
                        <div>
                            <label>Длина</label>
                            <input id="length" type='number' placeholder='Длина' value={formik.values.length}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.length && formik.touched.length && (
                                <p>{formik.errors.length}</p>)}
                        </div>
                        <div>
                            <label>Ширина</label>
                            <input id="width" type='number' placeholder='Ширина' value={formik.values.width}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.width && formik.touched.width && (
                                <p>{formik.errors.width}</p>)}
                        </div>
                        <div>
                            <label>Высота</label>
                            <input id="height" type='number' placeholder='Высота'
                                   value={formik.values.height}
                                   onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}
                            />
                            {formik.errors.height && formik.touched.height && (
                                <p>{formik.errors.height}</p>)}
                        </div>
                    </div>
                </div>
                <label> Страхование
                    <input id="insurance" type="checkbox" checked={formik.values.insurance}
                           onChange={formik.handleChange}/>
                </label>
                <div className="btn-wrapper">
                    <button type="submit">Отправить</button>
                </div>
            </form>

            {packageList.length === 0 && (<p>Нет отправлений</p>)}
            {packageList.map(packageItem => <PackageItem key={packageItem.id} packageItem={packageItem}/>)}
        </>


    );
}

export default PostalForm