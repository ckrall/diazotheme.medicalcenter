from setuptools import setup, find_packages
import os

version = '1.2.0.1'

setup(name='diazotheme.medicalcenter',
      version=version,
      description="UVAHS Medical Center 2015 - Diazo Theme",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
        ],
      keywords='',
      author='HSTS Web Development Center',
      author_email='wdc-support@virginia.edu',
      url='http://www.healthsystem.virginia.edu',
      license='GPL version 2',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['diazotheme'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'z3c.jbot',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
