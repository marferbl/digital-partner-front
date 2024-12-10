import React, { useEffect, useState } from 'react';
import { createFreelance, updateFreelance } from '../../services/freelance';
import CustomButton from '../base/CustomButton';
import EducationForm from './education-form';
import LanguageForm from './language-form';
import TechnologyForm from './technologies-form';
import ModalDefaultPhoto from '../base/modal-default-photos';
import { FiEdit } from 'react-icons/fi';
import { updateMe } from '../../services/auth';

const DigitalProfileForm = ({ myFreelance }) => {

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
        user: {}
    });



    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };

    // Handle photo upload (optional)
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUser((prevUser) => ({
                ...prevUser,
                photo: URL.createObjectURL(file),
            }));
        }
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
                    console.log(res);
                }
                )
                .catch((err) => {
                    console.log(err);
                }
                );
            return;
        }

        createFreelance(user)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };


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


    return (
        <div className="p-6 space-y-8 w-full">

            <div className="flex justify-end w-full">
                <CustomButton text="Guardar" onClick={saveFreelance} />
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
                            <input
                                id="country"
                                type="text"
                                value={user.country}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                                placeholder="Enter your country"
                            />
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
                            <input
                                id="job"
                                type="text"
                                value={user.job}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                                placeholder="Enter your job"
                            />
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
                            <ModalDefaultPhoto defaultImage={user?.user?.avatar} onSave={onSave}>
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
                            onChange={(e) => setUser({ ...user, introducction: e.target.value })}
                            className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext border-1 border-neutral"
                            placeholder="Tell us about yourself"
                            rows="4"
                        ></textarea>
                    </div>

                    {/* Example Input - LinkedIn */}
                    {/* <div>
                        <label htmlFor="linkedin" className="block text-white mb-1">
                            Url personal
                        </label>
                        <input
                            id="linkedin"
                            type="url"
                            value={user.web || ''}
                            onChange={(e) => setUser({ ...user, web: e.target.value })}
                            className="w-full p-3 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-neutraltext"
                            placeholder="Enter your LinkedIn profile URL"
                        />
                    </div> */}

                    {/* Add more fields as needed */}
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
                <span className="text-2xl font-semibold text-neutraltext block mb-6 text-white">Lenguajes</span>
            </div>
            <LanguageForm onChange={(data) => setDataOnUser(data, 'languages')} value={user.languages} />
        </div>
    );
};

export default DigitalProfileForm;
