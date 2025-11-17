/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { User } from "@/types/User";
import { Users, Search } from "lucide-react";
import SwitchContact from "@/components/ui/contacs/SwitchContact";

export default function HomePages() {
	const [users, setUsers] = useState<User[]>([]);
	const [search, setSearch] = useState("");
	const [genderFilter, setGenderFilter] = useState<string>("all");
	const [cityFilter, setCityFilter] = useState<string>("all");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let isMounted = true;

		const getUsers = async () => {
			try {
				setLoading(true);
				const res = await fetch("/api/users");
				const data = await res.json();

				if (!isMounted) return;

				let userData = [];
				if (Array.isArray(data)) {
					userData = data;
				} else if (data?.items && Array.isArray(data.items)) {
					userData = data.items;
				} else if (data?.data && Array.isArray(data.data)) {
					userData = data.data;
				}

				console.log("Жүктөлгөн адамдар саны:", userData.length);

				const mappedUsers = userData
					.map((user: any) => ({
						...user,
						id: user._id || user.id,
					}))
					.reverse();

				if (isMounted) {
					setUsers(mappedUsers);
					setLoading(false);
				}
			} catch (err) {
				console.error("Ката:", err);
				if (isMounted) {
					setUsers([]);
					setLoading(false);
				}
			}
		};

		getUsers();

		return () => {
			isMounted = false;
		};
	}, []);

	const filtered = Array.isArray(users)
		? users.filter((u) => {
				const fullName = `${u.firstName ?? ""} ${
					u.lastName ?? ""
				}`.toLowerCase();
				const phone = (u.phone ?? "").toLowerCase();
				const inn = (u.inn ?? "").toLowerCase();
				const searchLower = search.toLowerCase();

				const matchesSearch =
					fullName.includes(searchLower) ||
					phone.includes(searchLower) ||
					inn.includes(searchLower);

				const matchesGender =
					genderFilter === "all" ||
					(u.gender && u.gender.toLowerCase() === genderFilter.toLowerCase());

				const matchesCity =
					cityFilter === "all" ||
					(u.city && u.city.toLowerCase() === cityFilter.toLowerCase());

				return matchesSearch && matchesGender && matchesCity;
		  })
		: [];

	const maleCount = users.filter(
		(u) => u.gender?.toLowerCase() === "эркек"
	).length;
	const femaleCount = users.filter(
		(u) => u.gender?.toLowerCase() === "аял"
	).length;

	const cities = Array.from(new Set(users.map((u) => u.city).filter(Boolean)));

	return (
		<div className="min-h-screen bg-gradient-to-br mt-[50px] from-gray-900 via-slate-800 to-gray-900 p-4 md:p-8">
			<div className="w-full container mx-auto">
				{/* Header */}
				<div className="mb-10">
					<div
						className="
      flex flex-col md:flex-row items-center gap-6 
      p-4 md:p-6 
      bg-gray-800/40 rounded-2xl 
      border border-gray-700/50 shadow-lg backdrop-blur-md
    ">
						{/* Text Block */}
						<div className="flex-1 text-center md:text-left">
							<h1 className="text-2xl md:text-[20px] font-bold text-white mb-3 leading-snug">
								Урматтуу №2 шайлоо участогунун жашоочулары жана шайлоочулары!
							</h1>

							<p className="text-gray-300 text-base md:text-lg leading-relaxed">
								Сааттын башы 12, Айдын саны 12, Жашын издеп тапканга, Жылды
								сүрүү 12. Балакат жашы 12, Ичэги аты 12, Мейманды сыйлап, эт
								тарткан, Мүчөнүн баары 12. Кийинки айың 12, Тандаганың ким деги,
								Блютенден адашпа, Талапкер сабы 12.
							</p>

							<h1 className="text-2xl md:text-[20px] font-bold text-white mt-4">
								#№12 Төлөмүшов Бегали Пирмаматович
							</h1>
						</div>

						{/* Image */}
						<div className="flex-1 flex justify-center">
							<img
								src="https://scontent.cdninstagram.com/v/t51.82787-15/584401183_18086297785982151_179697115524123371_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=102&ig_cache_key=Mzc2NzU4MDcyNTA3MjEzNDMzNQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=mYXooyyJoncQ7kNvwE-JrDQ&_nc_oc=AdmhcG1tGZjhZOSlQSk-GTOZVDvTLAAbkbbwu5wlWtv5dwnpIdx5VGMuu2RXya0Zw-A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=4SYsLHi7e3VioTX6veslcw&oh=00_AfiEVhULugkzzNSh-gSc7r_0dT-7Dvqv_kpdioLA6N1vMQ&oe=6920A34E"
								alt="Шайлоочулар"
								className="
          w-full max-w-xs sm:max-w-sm md:max-w-md 
          rounded-2xl shadow-xl border border-gray-700/50 
          object-cover
        "
							/>
						</div>
					</div>
				</div>

				{/* Stats Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
					<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 hover:bg-gray-800/70 transition-all">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-400 mb-1">Бардыгы</p>
								<p className="text-2xl font-semibold text-gray-100">
									{users.length}
								</p>
							</div>
							<div className="w-12 h-12 bg-gray-700/50 rounded-xl flex items-center justify-center">
								<Users className="w-6 h-6 text-gray-300" />
							</div>
						</div>
					</div>

					<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 hover:bg-gray-800/70 transition-all">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-400 mb-1">Эркектер</p>
								<p className="text-2xl font-semibold text-gray-100">
									{maleCount}
								</p>
							</div>
							<div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center">
								<Users className="w-6 h-6 text-blue-400" />
							</div>
						</div>
					</div>

					<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 hover:bg-gray-800/70 transition-all">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-400 mb-1">Аялдар</p>
								<p className="text-2xl font-semibold text-gray-100">
									{femaleCount}
								</p>
							</div>
							<div className="w-12 h-12 bg-pink-900/30 rounded-xl flex items-center justify-center">
								<Users className="w-6 h-6 text-pink-400" />
							</div>
						</div>
					</div>
				</div>

				{/* Filters */}
				<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 mb-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						{/* Search */}
						<div className="md:col-span-1">
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Издөө
							</label>
							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
								<input
									type="text"
									placeholder="Аты, телефон, ИНН..."
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-600 bg-gray-900/50 text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition"
								/>
							</div>
						</div>

						{/* Gender Filter */}
						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Жынысы боюнча фильтр
							</label>
							<select
								value={genderFilter}
								onChange={(e) => setGenderFilter(e.target.value)}
								className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-900/50 text-gray-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition">
								<option value="all">Бардыгы</option>
								<option value="эркек">Эркектер</option>
								<option value="аял">Аялдар</option>
							</select>
						</div>

						{/* City Filter */}
						<div>
							<label className="block text-sm font-medium text-gray-300 mb-2">
								Прописка боюнча фильтр
							</label>
							<select
								value={cityFilter}
								onChange={(e) => setCityFilter(e.target.value)}
								className="w-full px-4 py-2.5 rounded-lg border border-gray-600 bg-gray-900/50 text-gray-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 outline-none transition">
								<option value="all">Бардыгы</option>
								{cities.map((city) => (
									<option key={city} value={city.toLowerCase()}>
										{city}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Results Count */}
				<div className="mb-4 flex items-center justify-between">
					<p className="text-sm text-gray-400">
						Табылды:{" "}
						<span className="font-semibold text-gray-200">
							{filtered.length}
						</span>{" "}
						адам
					</p>
				</div>

				{/* Table */}
				<div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-700">
							<thead className="bg-gray-900/50">
								<tr>
									{[
										"Аты",
										"Фамилия",
										"Жыл",
										"Телефон",
										"Жынысы",
										"Прописка",
										"Адрес",
									].map((header) => (
										<th
											key={header}
											className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
											{header}
										</th>
									))}
								</tr>
							</thead>
							<tbody className="bg-gray-800/30 divide-y divide-gray-700/50">
								{loading ? (
									<tr>
										<td colSpan={7} className="px-6 py-12 text-center">
											<div className="flex items-center justify-center gap-2 text-gray-400">
												<div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
												<span>Жүктөлүүдө...</span>
											</div>
										</td>
									</tr>
								) : filtered.length > 0 ? (
									filtered.map((user) => (
										<tr
											key={user.id}
											className="hover:bg-gray-700/30 transition-colors">
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
												{user.firstName}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-200">
												{user.lastName}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
												{user.year || "—"}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
												{user.phone}
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<span
													className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
														user.gender?.toLowerCase() === "эркек"
															? "bg-blue-900/50 text-blue-300 border border-blue-700/50"
															: user.gender?.toLowerCase() === "аял"
															? "bg-pink-900/50 text-pink-300 border border-pink-700/50"
															: "bg-gray-700/50 text-gray-300 border border-gray-600/50"
													}`}>
													{user.gender || "—"}
												</span>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
												{user.city}
											</td>
											<td
												className="px-6 py-4 text-sm text-gray-300 max-w-xs truncate"
												title={user.address}>
												{user.address}
											</td>
										</tr>
									))
								) : (
									<tr>
										<td
											colSpan={7}
											className="px-6 py-12 text-center text-sm text-gray-400">
											{search || genderFilter !== "all" || cityFilter !== "all"
												? "Издөө боюнча эч нерсе табылган жок"
												: "Маалымат жок"}
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
				<SwitchContact />
			</div>
		</div>
	);
}
