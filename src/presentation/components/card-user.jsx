/*
import ProfileDefault from "./profile-default";

const CardUser = ({ profile, isSelected }) => {
    console.log(profile)
    const { image_url, name, last_name, email } = profile
    
    return (
      <div className={`flex items-center border rounded-md gap-2 p-2 ${isSelected ? "bg-gray-200" : "bg-white"} hover:bg-gray-200 hover:cursor-pointer duration-300 transition-colors`}>
        <div className="rounded-full overflow-hidden h-12 w-12">
          {image_url ? <img className="w-full" src={image_url} alt={name} /> : <ProfileDefault name={name || `$Hola`} />}
        </div>
        <div>
          <p className="font-semibold">{name} {last_name}</p>
          <p>{email}</p>
        </div>
      </div>
    )
  }

export default CardUser;
*/
/*
import ProfileDefault from "./profile-default";

const CardUser = ({ profile = {}, isSelected }) => {
  const { image_url, name = "Nombre no disponible", last_name = "", email = "Correo no disponible" } = profile;

  return (
    <div className={`flex items-center border rounded-md gap-2 p-2 ${isSelected ? "bg-gray-200" : "bg-white"} hover:bg-gray-200 hover:cursor-pointer duration-300 transition-colors`}>
      <div className="rounded-full overflow-hidden h-12 w-12">
        {image_url ? <img className="w-full" src={image_url} alt={name} /> : <ProfileDefault name={name} />}
      </div>
      <div>
        <p className="font-semibold">{name} {last_name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default CardUser;

*/
/*
import ProfileDefault from "./profile-default";

const CardUser = ({ profile = {}, isSelected, isModerator, onDelete }) => {
  const { image_url, name = "Nombre no disponible", last_name = "", email = "Correo no disponible" } = profile;

  return (
    <div className={`flex items-center border rounded-md gap-2 p-2 ${isSelected ? "bg-gray-200" : "bg-white"} ${isModerator ? "" : "hover:bg-gray-200 hover:cursor-pointer duration-300 transition-colors"}`}>
      <div className="rounded-full overflow-hidden h-12 w-12">
        {image_url ? <img className="w-full" src={image_url} alt={name} /> : <ProfileDefault name={name} />}
      </div>
      <div className="flex-grow">
        <p className="font-semibold">{name} {last_name}</p>
        <p>{email}</p>
      </div>
      {isModerator && (
        <button
          onClick={() => onDelete(profile.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          Eliminar
        </button>
      )}
    </div>
  );
}

export default CardUser;
*/

import ProfileDefault from "./profile-default";

const CardUser = ({ profile = {}, isSelected, isModerator, onDelete }) => {
  const { image_url, name = "Nombre no disponible", last_name = "", email = "Correo no disponible" } = profile;

  return (
    <div className={`flex items-center gap-2 p-2 ${isModerator ? "" : "border rounded-md"} ${isSelected ? "bg-gray-200" : "bg-white"} ${isModerator ? "" : "hover:bg-gray-200 hover:cursor-pointer duration-300 transition-colors"}`}>
      <div className="rounded-full overflow-hidden h-12 w-12">
        {image_url ? <img className="w-full" src={image_url} alt={name} /> : <ProfileDefault name={name} />}
      </div>
      <div className="flex-grow">
        <p className="font-semibold">{name} {last_name}</p>
        <p>{email}</p>
      </div>
      {isModerator && (
        <button
          onClick={() => onDelete(profile.id)}
          className="text-red-500 hover:text-red-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      )}
    </div>
  );
}

export default CardUser;
