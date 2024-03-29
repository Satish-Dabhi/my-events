import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { Theme5 as Mui5Theme } from '@rjsf/material-ui';
import CryptoJS from 'crypto-js';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import verificationFormSchema from '../../formsDefinitions/verificationForm/schema.json';
import verificationFormUiSchema from '../../formsDefinitions/verificationForm/uiSchema.json';
import { updateSnackBar } from '../../redux/common/snackBarSlice';
import { createUser, loginUser, verifyCode } from '../../redux/user/userSlice';
import { getSchemaFieldTitle, setLocalStorageObject } from '../../services/utils';
import * as constant from '../../services/utils/constant';
import RadioWidget from '../customWidgets/RadioWidget';
import ObjectFieldTemplate from '../jsonForm/ObjectFieldTemplate';
import { withTheme } from '@rjsf/core';

const theme = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                variant: constant.OUTLINED_FORM_VARIANT,
            },
        },
    },
});

const Form = withTheme(Mui5Theme);

const EnrollForm = (props) => {
    const { schema, uiSchema, form, verifyForm } = props;
    const [currentForm, setCurrentForm] = useState({
        schema: schema,
        uiSchema: uiSchema,
        formType: form,
    });
    const [userEmail, setUserEmail] = useState('');
    const [formData, setFormData] = useState({});
    const [validateForm, setValidateForm] = useState(false);
    const { addUser, loginUserData, verifyOtp } = useSelector((store) => store.userHandler);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        if (currentForm.formType === 'login') {
            if (Object.keys(loginUserData).length > 0) {
                if (loginUserData?.validUser) {
                    dispatch(
                        updateSnackBar({
                            open: true,
                            message: 'Login Successful',
                            severity: 'success',
                        })
                    );
                    // const userToken = CryptoJS.AES.encrypt(loginUserData?.token, constant.LOCAL_OBJECT_SECRET_KEY).toString();
                    const userData = CryptoJS.AES.encrypt(
                        JSON.stringify(loginUserData),
                        constant.LOCAL_OBJECT_SECRET_KEY
                    ).toString();
                    // setLocalStorageObject('token', userToken);
                    setLocalStorageObject('token', userData);
                    navigate('/');
                } else {
                    dispatch(
                        updateSnackBar({
                            open: true,
                            message: 'Invalid Credential',
                            severity: 'error',
                        })
                    );
                }
            }
        }
    }, [loginUserData]);

    useEffect(() => {
        if (verifyOtp?.verify === true) {
            dispatch(
                updateSnackBar({
                    open: true,
                    message: 'Your account created successfully',
                    severity: 'success',
                })
            );
            navigate('/');
            // handleClose();
        } else if (verifyOtp?.verify === false) {
            dispatch(
                updateSnackBar({
                    open: true,
                    message: 'This verification code is not valid',
                    severity: 'error',
                })
            );
        }
    }, [verifyOtp]);

    useEffect(() => {
        if (currentForm.formType === 'registration') {
            if (addUser?.status === 'created') {
                setValidateForm(false);
                verifyForm(true);
                setCurrentForm({
                    schema: verificationFormSchema,
                    uiSchema: verificationFormUiSchema,
                    formType: 'verification',
                });
                dispatch(
                    updateSnackBar({
                        open: true,
                        message: 'Verification code sent',
                        severity: 'success',
                    })
                );
            } else if (addUser?.status === 'exist') {
                dispatch(
                    updateSnackBar({
                        open: true,
                        message: 'This email address is already exist',
                        severity: 'error',
                    })
                );
            }
        } else if (currentForm.formType === 'verification') {
            if (addUser?.status === 'created') {
                dispatch(
                    updateSnackBar({
                        open: true,
                        message: 'Verification code sent',
                        severity: 'success',
                    })
                );
            }
        }
    }, [addUser]);

    const transformErrors = (errors) => {
        return errors.map((error) => {
            if (error.name === 'required') {
                const fieldTitle = getSchemaFieldTitle(error.property);
                return {
                    ...error,
                    message: `${fieldTitle} is required`,
                };
            }
            return error;
        });
    };

    const handleSubmit = ({ formData }) => {
        if (currentForm.formType === 'registration') {
            setUserEmail(formData.email);
            const userData = {
                email: formData.email,
                iAm: formData.iAm,
                name: formData.name,
                password: formData.password,
            };
            dispatch(createUser(userData));
        } else if (currentForm.formType === 'login') {
            const loginUserData = {
                email: formData.email,
                password: formData.password,
            };
            dispatch(loginUser(loginUserData));
        } else {
            const verifiedData = {
                email: userEmail,
                otp: formData.otp,
            };
            dispatch(verifyCode(verifiedData));
        }
    };

    const validatePasswordMatch = (formData, errors) => {
        if (currentForm.formType === 'registration') {
            const { password, rePassword } = formData;
            if (password !== rePassword) {
                errors.rePassword.addError('Password and Re-Password should be same');
            }
        }
        return errors;
    };

    const handleChange = ({ formData }) => {
        setFormData(formData);
    };

    const widgets = {
        radio: RadioWidget,
    };

    const resendVerificationCode = () => {
        const resendData = {
            email: userEmail,
        };
        dispatch(createUser(resendData));
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="enroll-modal">
                <Form
                    formData={formData}
                    schema={currentForm.schema}
                    uiSchema={currentForm.uiSchema}
                    ObjectFieldTemplate={ObjectFieldTemplate}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    widgets={widgets}
                    // onError={onError}
                    validate={validatePasswordMatch}
                    noHtml5Validate
                    liveValidate={validateForm}
                    transformErrors={transformErrors}
                >
                    {currentForm.formType === 'verification' && (
                        <a href="#" onClick={() => resendVerificationCode()}>
                            Resend Verification code
                        </a>
                    )}
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Button
                                onClick={() => setValidateForm(true)}
                                variant="contained"
                                className="btn btn-outline-success"
                                type="submit"
                                style={{ width: '50%', margin: '5%' }}
                            >
                                {currentForm.formType === 'registration'
                                    ? 'Register'
                                    : currentForm.formType === 'login'
                                        ? 'Login'
                                        : 'Verify'}
                            </Button>
                        </div>
                    </div>
                </Form>
                {/* )} */}
            </div>
        </ThemeProvider>
    );
};

export default EnrollForm;
