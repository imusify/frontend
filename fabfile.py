# coding: utf-8

from fabric.api import runs_once, lcd, local, task, env, cd, run
from fabric.colors import green
from fabric.contrib.console import confirm

import requests

env.user = 'ubuntu'
env.hosts = ['imusify.com']



@task
def production():
    env.user = 'ubuntu'
    env.hosts = ['imusify.com']
    env.branch = 'master'
    env.server = 'production'
    env.app = 'imusify-prod'
    env.dist_dir = 'angular-app'


@task
def scp():
    local('chmod -R 775 dist')
    local('chmod 775 dist')
    run('sudo chown ubuntu:ubuntu /home/{user}/imusify/{dist_dir}/ -Rf'.format(
        user=env.user, dist_dir=env.dist_dir)
    )
    local('rsync -ru dist/* {user}@{host}:/home/{user}/imusify/{dist_dir}/'.format(
        user=env.user, host=env.hosts[0], dist_dir=env.dist_dir)
    )
    run('sudo chown www-data:www-data /home/{user}/imusify/{dist_dir}/ -Rf'.format(
        user=env.user, dist_dir=env.dist_dir)
    )
