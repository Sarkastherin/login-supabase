import { Input, InputComponent } from "../components/Forms/Inputs";
import { useGlobal } from "../context/Global/GlobalContext";
import { Select } from "../components/Forms/Inputs";
import { AddIcon } from "../assets/Icons/Add";
import { useForm, useFieldArray } from "react-hook-form";
export function Materiales() {
  const { theme } = useGlobal();
  return (
    <div className="container mx-auto min-h-screen xl:w-1/3 lg:w-1/2 sm:w-3/4 px-4">
      <form className="flex flex-col gap-5 mt-20">
        <InputComponent
          theme={theme}
          id={"rubro"}
          label={"Rubro"}
          type={"text"}
        />
        <InputComponent
          theme={theme}
          id={"subrubro"}
          label={"Subrubro"}
          type={"text"}
        />
        <div className="">
          <div className="overflow-x-auto">
            <table
              className={`min-w-full divide-y-2  text-sm bg-transparent  ${
                theme === "dark" ? "dark:divide-gray-700" : "divide-gray-200"
              }`}
            >
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-start">
                    Característica
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-start">
                    Valor
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td>
                    <Select theme={theme} id={""} emptyValue={"Selcción"} />
                  </td>
                  <td className="whitespace-nowrap ps-2 py-1">
                    <Input theme={theme} placeholder={"Valor"} />
                  </td>
                  <td className="whitespace-nowrap ps-2 py-1">
                    <button
                      type="button"
                      className={`mt-1 rounded border border-yellow-400 px-2 py-2 text-sm font-medium text-yellow-400 hover:bg-yellow-400 hover:text-gray-800 focus:outline-none active:bg-yellow-500`}
                    >
                      <AddIcon />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <InputComponent
          theme={theme}
          id={"certificado_calidad"}
          label={"Certificado de Calidad"}
          type={"text"}
        />
        <InputComponent
          theme={theme}
          id={"req_evalucion"}
          label={"Requiere Evaluación"}
          type={"text"}
        />
        <InputComponent
          theme={theme}
          id={"id_proveedor"}
          label={"Proveedor"}
          type={"text"}
        />
      </form>
    </div>
  );
}
