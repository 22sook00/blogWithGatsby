import { Combobox, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { Link, navigate } from "gatsby";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useAppSelector } from "@src/hooks/reduxHooks";

const Search = () => {
	const searchArr = useAppSelector((state) => state.posts);
	const [selected, setSelected] = useState();
	const [query, setQuery] = useState("");

	const filteredSearch =
		query === ""
			? searchArr
			: searchArr?.filter((keyword) => {
					return (
						keyword.post.summary
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, "")) ||
						keyword.post.title
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, "")) ||
						[...keyword.post.categories][0]
							.toLowerCase()
							.replace(/\s+/g, "")
							.includes(query.toLowerCase().replace(/\s+/g, ""))
					);
			  });

	const handleMoveTo = (keyword: { link: string; post: any }) => {
		navigate(keyword.link);
		setSelected;
	};
	const handleKeboardMoveTo = (selected) => {
		setSelected(selected);

		const mathingLink = searchArr?.find(
			(find) => find.post.title === selected,
		)?.link;
		navigate(mathingLink);
	};

	return (
		<div>
			<Combobox value={selected} onChange={setSelected}>
				<div className="relative">
					<Combobox.Input
						placeholder="🔎 Search keywords"
						className="
						 lg:w-[200px] lg:h-8
							transition text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-200/10 rounded-full py-1 px-3  items-center 
							inline-flex justify-center border border-transparent bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2
							"
						onChange={(event) => setQuery(event.target.value)}
						onKeyUp={() => handleKeboardMoveTo(selected)}
					/>
					<Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronUpDownIcon
							className="h-5 w-5 text-gray-400"
							aria-hidden="true"
						/>
					</Combobox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						afterLeave={() => setQuery("")}
					>
						<Combobox.Options className="absolute mt-4 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{filteredSearch?.length === 0 && query !== "" ? (
								<div className="relative cursor-default select-none py-2 px-4 text-gray-700">
									Nothing found.
								</div>
							) : (
								filteredSearch?.map((keyword, idx) => (
									<Combobox.Option
										key={idx}
										className={({ active }) =>
											`z-50 relative cursor-pointer select-none py-2 px-4 ${
												active ? "bg-blue-100 text-primary" : "text-gray-900"
											}`
										}
										value={keyword.post.title}
										onClick={() => handleMoveTo(keyword)}
									>
										{({ selected, active }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{keyword.post.title}
												</span>
												{selected ? (
													<span
														className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
															active
																? "text-text-tag-blue"
																: "text-text-primary"
														}`}
													>
														<CheckIcon className="h-5 w-5" aria-hidden="true" />
													</span>
												) : null}
											</>
										)}
									</Combobox.Option>
								))
							)}
						</Combobox.Options>
					</Transition>
				</div>
			</Combobox>
		</div>
	);
};

export default Search;
