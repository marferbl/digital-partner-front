import React, { useEffect, useState } from 'react';
import { createFreelance, updateFreelance } from '../../services/freelance';
import CustomButton from '../base/CustomButton';
import EducationForm from './education-form';
import LanguageForm from './language-form';
import TechnologyForm from './technologies-form';
import ModalDefaultPhoto from '../base/modal-default-photos';
import { FiEdit } from 'react-icons/fi';
import { updateMe } from '../../services/auth';
import { Link } from 'react-router-dom';
import ExperienceForm from './experience-form';
import { ImageGalleryUpload } from '../base/image-gallery-upload';
import { useToast } from '@chakra-ui/react';
import SearchSelectPositions from '../base/search-select-positions';
import SearchSelectCountries from '../base/search-select-countries';

const DigitalProfileForm = ({ myFreelance }) => {

    const toast = useToast();

    useEffect(() => {
        if (myFreelance) {
            setUser(myFreelance);
        }
    }, [myFreelance]);


    // Initialize user state
    const [user, setUser] = useState({
        id: '',
        fullName: '',
        country: '',
        city: '',
        telephone: '',
        job: '',
        email: '',
        photo: null,
        introducction: '',
        studies: [],
        technologies: [],
        aboutMe: '',
        languages: [],
        user: {},
        prefferedWork: '',
        openPrefferedWork: false,
        salary: 0,
        openSalary: false,
        experience: [],
        gallery: []
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const setDataOnUser = (data, key) => {
        setUser((prevUser) => ({
            ...prevUser,
            [key]: data,
        }));
    };

    const saveFreelance = () => {
        if (user && user._id) {
            updateFreelance(user)
                .then((res) => {
                    showToast()
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
            return;
        }

        const parsedUser = { ...user };
        delete parsedUser.user;

        createFreelance(parsedUser)
            .then((res) => {
                showToast()
            })
            .catch((err) => {
                console.log(err);
            });


    };

    const showToast = () => {
        toast({
            title: "OK",
            description: "Cambios guardados",
            status: "success",
            duration: 4000,
            isClosable: true,
        });
    }


    const onSave = (logo) => {
        const updateUser = user.user
        updateUser.avatar = logo
        updateMe(updateUser).then((res) => {
            setUser((prevUser) => ({
                ...prevUser,
                user: updateUser
            }));
        })
    }

    const setGalleryImages = (images) => {
        setUser((prevUser) => ({
            ...prevUser,
            gallery: images
        }));
    }

    const setLogo = (logo) => {
        setUser((prevUser) => ({
            ...prevUser,
            user: {
                ...prevUser.user,
                avatar: logo
            }
        }));
    }



    return (
        <div className="p-6 space-y-8 w-full">

            <div className="flex justify-end w-full gap-2">
                <CustomButton text="Guardar cambios" onClick={saveFreelance} />
                <Link to={`/talent/${user._id}`} className="text-white">
                    <CustomButton text="Vista previa" type='secondary' />
                </Link>
            </div>
            {/* Section 1: Digital Profile */}
            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Información básica</span>
                <div className="flex flex-col md:flex-row gap-6">
                    {/* Left Side - Inputs */}
                    <div className="flex-1 space-y-4">
                        {/* Full Name */}
                        <div>
                            <label htmlFor="fullName" className="block text-white mb-1">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                value={user.fullName}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label htmlFor="country" className="block text-white mb-1">
                                Country
                            </label>

                            <SearchSelectCountries onChange={(value) => setDataOnUser(value, 'country')} mb={5} defaultValue={user.country} theme='dark' />

                        </div>

                        {/* City */}
                        <div>
                            <label htmlFor="city" className="block text-white mb-1">
                                City
                            </label>
                            <input
                                id="city"
                                type="text"
                                value={user.city}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                                placeholder="Enter your city"
                            />
                        </div>

                        {/* Telephone */}
                        <div>
                            <label htmlFor="telephone" className="block text-white mb-1">
                                Telephone
                            </label>
                            <input
                                id="telephone"
                                type="tel"
                                value={user.telephone}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                                placeholder="Enter your telephone number"
                            />
                        </div>

                        {/* Job */}
                        <div>
                            <label htmlFor="job" className="block text-white mb-1">
                                Job
                            </label>
                            <SearchSelectPositions onChange={(data) => setDataOnUser(data, 'job')} defaultValue={user.job} />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-white mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={user.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                                placeholder="Enter your email address"
                            />
                        </div>
                    </div>

                    {/* Right Side - Photo */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-40 h-40 bg-black rounded-xl flex items-center justify-center overflow-hidden relative">
                            <ModalDefaultPhoto defaultImage={user?.user?.avatar} onSave={onSave} setLogo={setLogo}>
                                <div className="relative w-20 h-20 md:w-40 md:h-40">
                                    {/* Image */}
                                    <img
                                        src={user?.user?.avatar || '/profile-photos/profile-photo-1.png'}
                                        alt="Profile Avatar"
                                        className="w-20 h-20 md:w-40 md:h-40 rounded-xl"
                                    />

                                    {/* Edit Icon */}
                                    <div className="absolute top-0 left-0 bg-neutral rounded-full p-1 shadow-md cursor-pointer">
                                        <FiEdit className="text-gray-600" size={20} />
                                    </div>
                                </div>
                            </ModalDefaultPhoto>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Additional Information */}
            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Introducción</span>

                <div className="space-y-4">
                    {/* Example Input - Bio */}
                    <div>
                        <label htmlFor="bio" className="block text-white mb-1">
                            Bio
                        </label>
                        <textarea
                            id="bio"
                            value={user.introducction || ''}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 350) {
                                    setUser({ ...user, introducction: value });
                                }
                            }}
                            className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                            placeholder="Tell us about yourself"
                            rows="4"
                        ></textarea>
                        {/* Character Counter */}
                        <div className="text-right text-white text-sm mt-2">
                            {user.introducction?.length || 0} / 350 caracteres
                        </div>
                    </div>
                </div>
            </div>


            <div className='h-12' />
            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Formación</span>
            </div>
            <EducationForm onChange={(data) => setDataOnUser(data, 'studies')} value={user.studies} />
            <div className='h-12' />

            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Tecnologías</span>
            </div>
            <TechnologyForm onChange={(data) => setDataOnUser(data, 'technologies')} value={user.technologies} />
            <div className='h-12' />

            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Experiencia</span>
            </div>
            <ExperienceForm onChange={(data) => setDataOnUser(data, 'experience')} value={user.experience} />

            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Sobre mí</span>

                {/* Example Input - Bio */}
                <div>
                    <label htmlFor="bio" className="block text-white mb-1">
                        Sobre mí
                    </label>
                    <textarea
                        id="bio"
                        value={user.aboutMe || ''}
                        onChange={(e) => setUser({ ...user, aboutMe: e.target.value })}
                        className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                        placeholder="Tell us about yourself"
                        rows="6"
                    ></textarea>
                </div>
            </div>
            <div className='h-12' />

            <div className="rounded-xl bg-neutralblack p-6">
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Idiomas</span>
            </div>
            <LanguageForm onChange={(data) => setDataOnUser(data, 'languages')} value={user.languages} />

            <div className='h-12' />

            <div className="bg-black text-white space-y-6">
                {/* Salary Section */}
                <div className="p-4 rounded-lg bg-neutralblack">
                    <h2 className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Rango de Salario</h2>
                    <label className="block mb-1">Cantidad anual mínima</label>

                    <div className="flex items-center space-x-4">
                        <div className='w-72'>
                            <input
                                id="salary"
                                type="number"
                                name="salary"
                                value={user.salary}
                                onChange={handleChange}
                                placeholder="30000"
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                id="openSalary"
                                type="checkbox"
                                name="openSalary"
                                checked={user.openSalary}
                                onChange={handleChange}
                                className="appearance-none w-5 h-5 border border-gray-600 rounded-full bg-gray-400 checked:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            />
                            <label className="ml-2 text-sm">Abierto a recibir otras ofertas</label>
                        </div>
                    </div>
                </div>


                {/* Work Mode Section */}
                <div className="p-4 rounded-lg bg-neutralblack">
                    <h2 className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Modalidad de trabajo</h2>
                    <label className="block mb-1">Modalidad Preferida</label>

                    <div className="flex items-center space-x-4">
                        <div className='w-72'>
                            <select
                                id="prefferedWork"
                                name="prefferedWork"
                                value={user.prefferedWork}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:ring-2 focus:ring-neutral-700 border-1 border-neutral">
                                <option value="" disabled>
                                    Seleccionar
                                </option>
                                <option value="remote">Remoto</option>
                                <option value="presential">Presencial</option>
                                <option value="hybrid">Híbrido</option>

                            </select>
                        </div>
                        <div className="flex items-center">
                            <input
                                id="openPrefferedWork"
                                type="checkbox"
                                name="openPrefferedWork"
                                checked={user.openPrefferedWork}
                                onChange={handleChange}
                                className="appearance-none w-5 h-5 border border-gray-600 rounded-full bg-gray-400 checked:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none"
                            />
                            <label className="ml-2 text-sm">
                                Abierto a recibir otro tipo de oferta
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg bg-neutralblack">
                <label htmlFor="linkedin" className="block text-white mb-1 text-2xl font-semibold">
                    Añadir enlace
                </label>
                <input
                    id="linkedin"
                    type="url"
                    value={user.web || ''}
                    onChange={(e) => setUser({ ...user, web: e.target.value })}
                    className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext"
                    placeholder="Linkedin, github, portfolio..."
                />
            </div>
            {user && user.gallery && <ImageGalleryUpload url={`image/upload`} setGalleryImages={setGalleryImages} defaultUrls={user?.gallery} />}


            <div className="flex justify-end w-full">
                <CustomButton text="Guardar cambios" onClick={saveFreelance} />
            </div>
        </div>
    );
};

export default DigitalProfileForm;
