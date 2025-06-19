import React from 'react'
import CustomDropdownMenu from '../CustomDropdownMenu'
import CustomCheckbox from '../CustomCheckbox';






const JobFindingSection: React.FC = () => {

    const location = ["All Cities in Malta", "All Cities in India", "All Cities in Serrbia"];

    const skills = ["All Skills", ""]




    const handleLocationSelect = (val: string) => {
        console.log("Selected:", val);
    };


    const handleSkillSelect = (val: string) => {
        console.log("Selected:", val);
    };








    return (
        <div>

            <div className="w-full max-w-7xl mx-auto bg-white p-6 ">
                {/* Row 1: 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">

                    {/* Job ID */}
                    <div>
                        <label htmlFor="jobId" className="block text-[22px] font-bold text-[#000000] mb-4">
                            Keyword Or Job Id
                        </label>
                        <input
                            type="text"
                            placeholder='keyword'
                            id="jobId"
                            className="w-[100%] border-0 border-b font-[400] border-gray-400 focus:border-blue-500 bg-transparent    text-[#000000] text-[16px] placeholder:text-gray-500 focus:outline-none"

                        />
                    </div>

                    {/* Dropdown 1 */}
                    <div>
                        <label htmlFor="dropdown1" className="block text-[22px] font-bold text-[#000000] mb-4">
                            Location
                        </label>
                        <CustomDropdownMenu
                            options={location}

                            onSelect={handleLocationSelect}
                        />
                    </div>

                    {/* Dropdown 2 */}
                    <div>
                        <label htmlFor="dropdown2" className="block text-[22px] font-bold text-[#000000] mb-4">
                            Skills
                        </label>
                        <CustomDropdownMenu
                            options={skills}

                            onSelect={handleSkillSelect}
                        />
                    </div>


                    <div>
                        Button
                    </div>
                </div>

                {/* Checkboxes Below */}
                <div className="mt-6">
                    
                    <div className="flex flex-wrap gap-6">
                        <CustomCheckbox
                            label="Remote"
                            checkColor="text-green-600"
                            onChange={(val) => console.log("Checked:", val)}
                        />

                        <CustomCheckbox
                            label="Office"
                            checkColor="text-green-600"
                            onChange={(val) => console.log("Checked:", val)}
                        />
                        <CustomCheckbox
                            label="Open to Relocation"
                            checkColor="text-green-600"
                            onChange={(val) => console.log("Checked:", val)}
                        />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default JobFindingSection
