// components/Contact.tsx
"use client";
import { EnvelopeIcon, LinkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { FieldValues, useForm } from 'react-hook-form';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Header from '../components/Header';

const Contact = () => {
	const { register, handleSubmit } = useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onSubmit = async (data: FieldValues) => {
		setIsSubmitting(true);
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) throw new Error('Failed to send message');

			toast.success('Message sent successfully!');
		} catch (error) {
			toast.error('Failed to send message');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-24">
			<Header />
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-2 gap-12 items-start">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						className="space-y-8 text-white relative z-10"
					>
						<h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
							Get in Touch
						</h2>

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
									Name
								</label>
								<input
									{...register('name')}
									type="text"
									className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
									placeholder="John Doe"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
									Email
								</label>
								<input
									{...register('email')}
									type="email"
									className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
									placeholder="john@example.com"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
									Message
								</label>
								<textarea
									{...register('message')}
									rows={4}
									className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
									placeholder="Your message..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</button>
						</form>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						className="space-y-8 relative z-10"
					>
						<div className="p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl">
							<h3 className="text-xl font-semibold text-white mb-6">Other Ways to Connect</h3>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="p-3 bg-blue-400/10 rounded-lg">
										<EnvelopeIcon className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h4 className="text-white font-medium mb-1">Email</h4>
										<a
											href="mailto:contact@example.com"
											className="text-gray-300 hover:text-blue-400 transition-colors"
										>
											gustavo.bugs.dev@gmail.com

										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="p-3 bg-purple-400/10 rounded-lg">
										<GlobeAltIcon className="w-6 h-6 text-purple-400" />
									</div>
									<div>
										<h4 className="text-white font-medium mb-1">LinkedIn</h4>
										<a
											href="https://www.linkedin.com/in/gustavo-kardauke-bugs-b3258b26b/"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-300 hover:text-blue-400 transition-colors">
											linkedin.com/in/gustavo-kardauke-bugs
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="p-3 bg-blue-400/10 rounded-lg">
										<LinkIcon className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h4 className="text-white font-medium mb-1">GitHub</h4>
										<a
											href="https://github.com/gustavokbugs"
											target="_blank"
											rel="noopener noreferrer"
											className="text-gray-300 hover:text-blue-400 transition-colors"
										>
											github.com/gustavokbugs
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl">
							<h3 className="text-xl font-semibold text-white mb-4">Let&apos;s Build Together</h3>
							<p className="text-gray-300 leading-relaxed">
								Whether you have a project in mind, want to collaborate,
								or just want to chat about tech - feel free to reach out.
								I&apos;m always open to new opportunities and interesting ideas!
							</p>
						</div>
					</motion.div>
				</div>

				<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-blob mix-blend-screen" />
				<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-blob animation-delay-2000 mix-blend-screen" />
			</div>
		</section>
	);
};

export default Contact;