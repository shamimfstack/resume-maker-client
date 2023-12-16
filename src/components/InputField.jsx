import { useForm } from "react-hook-form";



const InputField = () => {
    const {
        register,
        formState: { errors },
      } = useForm();
  return (
    <div className="form-control">
    <label className="label">
      <span className="label-text">Name: </span>
    </label>
    <input
      type="text"
      placeholder="Type here"
      className="input border p-2 rounded w-full"
      {...register("name", { required: true, maxLength: 20 })}
    />
    {errors.name && <span>This field is required</span>}
  </div>
  );
}

export default InputField;
