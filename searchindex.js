Search.setIndex({docnames:["evergreen","evergreen.errors","evergreen.metrics","getting_started","index","modules","sample_usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["evergreen.rst","evergreen.errors.rst","evergreen.metrics.rst","getting_started.rst","index.rst","modules.rst","sample_usage.rst"],objects:{"":{evergreen:[0,0,0,"-"]},"evergreen.alias":{DisplayTaskAlias:[0,1,1,""],VariantAlias:[0,1,1,""]},"evergreen.alias.DisplayTaskAlias":{execution_tasks:[0,2,1,""],name:[0,2,1,""]},"evergreen.alias.VariantAlias":{display_tasks:[0,2,1,""],tasks:[0,2,1,""],variant:[0,2,1,""]},"evergreen.api":{CachedEvergreenApi:[0,1,1,""],EvergreenApi:[0,1,1,""],RetryingEvergreenApi:[0,1,1,""]},"evergreen.api.CachedEvergreenApi":{build_by_id:[0,2,1,""],clear_caches:[0,2,1,""],version_by_id:[0,2,1,""]},"evergreen.api.EvergreenApi":{abort_task:[0,2,1,""],alias_for_version:[0,2,1,""],all_distros:[0,2,1,""],all_hosts:[0,2,1,""],all_projects:[0,2,1,""],annotate_task:[0,2,1,""],build_by_id:[0,2,1,""],builds_by_version:[0,2,1,""],commit_queue_for_project:[0,2,1,""],configure_patch:[0,2,1,""],configure_task:[0,2,1,""],get_api:[0,2,1,""],get_task_annotation:[0,2,1,""],give_permissions_to_user:[0,2,1,""],json_by_task:[0,2,1,""],json_history_for_task:[0,2,1,""],manifest:[0,2,1,""],manifest_for_task:[0,2,1,""],patch_by_id:[0,2,1,""],patches_by_project:[0,2,1,""],patches_by_project_time_window:[0,2,1,""],patches_by_user:[0,2,1,""],performance_results_by_task:[0,2,1,""],performance_results_by_task_name:[0,2,1,""],permissions_for_user:[0,2,1,""],project_by_id:[0,2,1,""],recent_versions_by_project:[0,2,1,""],restart_task:[0,2,1,""],retrieve_task_log:[0,2,1,""],send_slack_message:[0,2,1,""],session:[0,2,1,""],single_test_by_task_and_test_file:[0,2,1,""],stream_log:[0,2,1,""],task_by_id:[0,2,1,""],task_reliability_by_project:[0,2,1,""],task_stats_by_project:[0,2,1,""],tasks_by_build:[0,2,1,""],tasks_by_project:[0,2,1,""],tasks_by_project_and_commit:[0,2,1,""],test_stats_by_project:[0,2,1,""],tests_by_task:[0,2,1,""],version_by_id:[0,2,1,""],versions_by_project:[0,2,1,""],versions_by_project_time_window:[0,2,1,""],with_session:[0,2,1,""]},"evergreen.api_requests":{IssueLinkRequest:[0,1,1,""],SlackAttachment:[0,1,1,""],SlackAttachmentField:[0,1,1,""]},"evergreen.api_requests.IssueLinkRequest":{as_dict:[0,2,1,""],issue_key:[0,2,1,""],url:[0,2,1,""]},"evergreen.api_requests.SlackAttachment":{author_icon:[0,3,1,""],author_name:[0,3,1,""],color:[0,3,1,""],fallback:[0,3,1,""],fields:[0,3,1,""],mrkdwn_in:[0,3,1,""],text:[0,3,1,""],title:[0,3,1,""],title_link:[0,3,1,""]},"evergreen.api_requests.SlackAttachmentField":{"short":[0,3,1,""],title:[0,3,1,""],value:[0,3,1,""]},"evergreen.base":{evg_attrib:[0,4,1,""],evg_date_attrib:[0,4,1,""],evg_datetime_attrib:[0,4,1,""],evg_short_datetime_attrib:[0,4,1,""]},"evergreen.build":{Build:[0,1,1,""],StatusCounts:[0,1,1,""]},"evergreen.build.Build":{activated:[0,2,1,""],activated_by:[0,2,1,""],activated_time:[0,2,1,""],actual_makespan_ms:[0,2,1,""],branch:[0,2,1,""],build_variant:[0,2,1,""],create_time:[0,2,1,""],display_name:[0,2,1,""],finish_time:[0,2,1,""],get_metrics:[0,2,1,""],get_project_identifier:[0,2,1,""],get_tasks:[0,2,1,""],get_version:[0,2,1,""],git_hash:[0,2,1,""],id:[0,2,1,""],is_completed:[0,2,1,""],order:[0,2,1,""],origin:[0,2,1,""],predicted_makespan_ms:[0,2,1,""],project_id:[0,2,1,""],start_time:[0,2,1,""],status:[0,2,1,""],status_counts:[0,2,1,""],tasks:[0,2,1,""],time_taken_ms:[0,2,1,""],version:[0,2,1,""]},"evergreen.build.StatusCounts":{dispatched:[0,2,1,""],failed:[0,2,1,""],inactivate:[0,2,1,""],started:[0,2,1,""],succeeded:[0,2,1,""],timed_out:[0,2,1,""],undispatched:[0,2,1,""]},"evergreen.commitqueue":{CommitQueue:[0,1,1,""],CommitQueueItem:[0,1,1,""]},"evergreen.commitqueue.CommitQueue":{queue:[0,2,1,""],queue_id:[0,2,1,""]},"evergreen.commitqueue.CommitQueueItem":{issue:[0,2,1,""],modules:[0,2,1,""]},"evergreen.config":{EvgAuth:[0,1,1,""],get_auth:[0,4,1,""],get_auth_from_config:[0,4,1,""],read_evergreen_config:[0,4,1,""],read_evergreen_from_file:[0,4,1,""]},"evergreen.config.EvgAuth":{api_key:[0,2,1,""],username:[0,2,1,""]},"evergreen.distro":{AwsDistroSettings:[0,1,1,""],Distro:[0,1,1,""],DockerDistroSettings:[0,1,1,""],FinderSettings:[0,1,1,""],MountPoint:[0,1,1,""],PlannerSettings:[0,1,1,""],StaticDistroSettings:[0,1,1,""]},"evergreen.distro.AwsDistroSettings":{ami:[0,2,1,""],aws_access_key_id:[0,2,1,""],aws_access_secret_id:[0,2,1,""],bid_price:[0,2,1,""],instance_type:[0,2,1,""],ipv6:[0,2,1,""],is_vpc:[0,2,1,""],key_name:[0,2,1,""],mount_points:[0,2,1,""],region:[0,2,1,""],security_group:[0,2,1,""],security_group_ids:[0,2,1,""],subnet_id:[0,2,1,""],user_data:[0,2,1,""],vpc_name:[0,2,1,""]},"evergreen.distro.Distro":{arch:[0,2,1,""],bootstrap_method:[0,2,1,""],client_dir:[0,2,1,""],clone_method:[0,2,1,""],communication_method:[0,2,1,""],container_pool:[0,2,1,""],curator_dir:[0,2,1,""],disabled:[0,2,1,""],expansions:[0,2,1,""],finder_settings:[0,2,1,""],image_id:[0,2,1,""],jasper_credentials_path:[0,2,1,""],name:[0,2,1,""],planner_settings:[0,2,1,""],pool_size:[0,2,1,""],provider:[0,2,1,""],settings:[0,2,1,""],setup:[0,2,1,""],setup_as_sudo:[0,2,1,""],shell_path:[0,2,1,""],ssh_key:[0,2,1,""],ssh_options:[0,2,1,""],teardown:[0,2,1,""],user:[0,2,1,""],user_spawn_allowed:[0,2,1,""],work_dir:[0,2,1,""]},"evergreen.distro.DockerDistroSettings":{image_url:[0,2,1,""]},"evergreen.distro.FinderSettings":{version:[0,2,1,""]},"evergreen.distro.MountPoint":{device_name:[0,2,1,""],size:[0,2,1,""],virtual_name:[0,2,1,""]},"evergreen.distro.PlannerSettings":{acceptable_host_idle_time:[0,2,1,""],group_versions:[0,2,1,""],maximum_hosts:[0,2,1,""],minimum_hosts:[0,2,1,""],patch_zipper_factor:[0,2,1,""],target_time:[0,2,1,""],task_ordering:[0,2,1,""],version:[0,2,1,""]},"evergreen.distro.StaticDistroSettings":{hosts:[0,2,1,""]},"evergreen.errors":{exceptions:[1,0,0,"-"]},"evergreen.errors.exceptions":{ActiveTaskMetricsException:[1,5,1,""],EvergreenException:[1,5,1,""],MetricsException:[1,5,1,""]},"evergreen.host":{Host:[0,1,1,""],HostDistro:[0,1,1,""],RunningTask:[0,1,1,""]},"evergreen.host.Host":{distro:[0,2,1,""],get_build:[0,2,1,""],get_version:[0,2,1,""],host_id:[0,2,1,""],host_type:[0,2,1,""],host_url:[0,2,1,""],provisioned:[0,2,1,""],running_task:[0,2,1,""],started_by:[0,2,1,""],status:[0,2,1,""],user:[0,2,1,""],user_host:[0,2,1,""]},"evergreen.host.HostDistro":{distro_id:[0,2,1,""],image_id:[0,2,1,""],provider:[0,2,1,""]},"evergreen.host.RunningTask":{build_id:[0,2,1,""],dispatch_time:[0,2,1,""],get_build:[0,2,1,""],get_version:[0,2,1,""],name:[0,2,1,""],task_id:[0,2,1,""],version_id:[0,2,1,""]},"evergreen.manifest":{Manifest:[0,1,1,""],ManifestModule:[0,1,1,""]},"evergreen.manifest.Manifest":{branch:[0,2,1,""],id:[0,2,1,""],modules:[0,2,1,""],project:[0,2,1,""],revision:[0,2,1,""]},"evergreen.manifest.ManifestModule":{branch:[0,2,1,""],owner:[0,2,1,""],repo:[0,2,1,""],revision:[0,2,1,""],url:[0,2,1,""]},"evergreen.metrics":{buildmetrics:[2,0,0,"-"],versionmetrics:[2,0,0,"-"]},"evergreen.metrics.buildmetrics":{BuildMetrics:[2,1,1,""]},"evergreen.metrics.buildmetrics.BuildMetrics":{as_dict:[2,2,1,""],calculate:[2,2,1,""],create_time:[2,2,1,""],end_time:[2,2,1,""],makespan:[2,2,1,""],pct_display_tasks_failed:[2,2,1,""],pct_display_tasks_success:[2,2,1,""],pct_display_tasks_system_failure:[2,2,1,""],pct_display_tasks_timed_out:[2,2,1,""],pct_display_tasks_undispatched:[2,2,1,""],pct_tasks_failed:[2,2,1,""],pct_tasks_success:[2,2,1,""],pct_tasks_system_failure:[2,2,1,""],pct_tasks_timed_out:[2,2,1,""],pct_tasks_undispatched:[2,2,1,""],start_time:[2,2,1,""],total_display_tasks:[2,2,1,""],total_tasks:[2,2,1,""],wait_time:[2,2,1,""]},"evergreen.metrics.versionmetrics":{VersionMetrics:[2,1,1,""]},"evergreen.metrics.versionmetrics.VersionMetrics":{as_dict:[2,2,1,""],calculate:[2,2,1,""],create_time:[2,2,1,""],end_time:[2,2,1,""],makespan:[2,2,1,""],pct_tasks_failure:[2,2,1,""],pct_tasks_success:[2,2,1,""],pct_tasks_system_failure:[2,2,1,""],pct_tasks_timeout:[2,2,1,""],start_time:[2,2,1,""],total_tasks:[2,2,1,""],wait_time:[2,2,1,""]},"evergreen.patch":{FileDiff:[0,1,1,""],GithubPatchData:[0,1,1,""],ModuleCodeChanges:[0,1,1,""],Patch:[0,1,1,""],VariantsTasks:[0,1,1,""]},"evergreen.patch.FileDiff":{additions:[0,2,1,""],deletions:[0,2,1,""],description:[0,2,1,""],diff_link:[0,2,1,""],file_name:[0,2,1,""]},"evergreen.patch.GithubPatchData":{author:[0,2,1,""],base_owner:[0,2,1,""],base_repo:[0,2,1,""],head_hash:[0,2,1,""],head_owner:[0,2,1,""],head_repo:[0,2,1,""],pr_number:[0,2,1,""]},"evergreen.patch.ModuleCodeChanges":{branch_name:[0,2,1,""],commit_messages:[0,2,1,""],file_diffs:[0,2,1,""],html_link:[0,2,1,""],raw_link:[0,2,1,""]},"evergreen.patch.Patch":{activated:[0,2,1,""],alias:[0,2,1,""],author:[0,2,1,""],branch:[0,2,1,""],builds:[0,2,1,""],create_time:[0,2,1,""],description:[0,2,1,""],finish_time:[0,2,1,""],get_version:[0,2,1,""],git_hash:[0,2,1,""],github_patch_data:[0,2,1,""],module_code_changes:[0,2,1,""],patch_id:[0,2,1,""],patch_number:[0,2,1,""],project_id:[0,2,1,""],start_time:[0,2,1,""],status:[0,2,1,""],task_list_for_variant:[0,2,1,""],tasks:[0,2,1,""],variants_tasks:[0,2,1,""],version:[0,2,1,""]},"evergreen.patch.VariantsTasks":{name:[0,2,1,""],tasks:[0,2,1,""]},"evergreen.performance_results":{PerformanceData:[0,1,1,""],PerformanceTestBatch:[0,1,1,""],PerformanceTestResult:[0,1,1,""],PerformanceTestRun:[0,1,1,""]},"evergreen.performance_results.PerformanceData":{create_time:[0,2,1,""],name:[0,2,1,""],order:[0,2,1,""],project_id:[0,2,1,""],revision:[0,2,1,""],tag:[0,2,1,""],task_id:[0,2,1,""],task_name:[0,2,1,""],test_batch:[0,2,1,""],variant:[0,2,1,""],version_id:[0,2,1,""]},"evergreen.performance_results.PerformanceTestBatch":{end:[0,2,1,""],errors:[0,2,1,""],start:[0,2,1,""],storage_engine:[0,2,1,""],test_runs:[0,2,1,""],test_runs_matching:[0,2,1,""]},"evergreen.performance_results.PerformanceTestResult":{mean_value:[0,2,1,""],measurement:[0,2,1,""],recorded_values:[0,2,1,""],thread_level:[0,2,1,""]},"evergreen.performance_results.PerformanceTestRun":{end:[0,2,1,""],start:[0,2,1,""],test_name:[0,2,1,""],test_results:[0,2,1,""],workload:[0,2,1,""]},"evergreen.project":{Project:[0,1,1,""]},"evergreen.project.Project":{"private":[0,2,1,""],admins:[0,2,1,""],batch_time:[0,2,1,""],branch_name:[0,2,1,""],commit_queue:[0,2,1,""],deactivated_previous:[0,2,1,""],display_name:[0,2,1,""],enabled:[0,2,1,""],identifier:[0,2,1,""],most_recent_version:[0,2,1,""],owner_name:[0,2,1,""],pr_testing_enabled:[0,2,1,""],remote_path:[0,2,1,""],repo_name:[0,2,1,""],tracked:[0,2,1,""],tracks_push_events:[0,2,1,""]},"evergreen.resource_type_permissions":{PermissionableResourceType:[0,1,1,""],ResourceTypePermissions:[0,1,1,""]},"evergreen.resource_type_permissions.PermissionableResourceType":{DISTRO:[0,3,1,""],PROJECT:[0,3,1,""],SUPERUSER:[0,3,1,""]},"evergreen.resource_type_permissions.ResourceTypePermissions":{permissions:[0,2,1,""],resource_type:[0,2,1,""]},"evergreen.stats":{TaskStats:[0,1,1,""],TestStats:[0,1,1,""]},"evergreen.stats.TaskStats":{avg_duration_pass:[0,2,1,""],date:[0,2,1,""],distro:[0,2,1,""],num_fail:[0,2,1,""],num_pass:[0,2,1,""],task_name:[0,2,1,""],variant:[0,2,1,""]},"evergreen.stats.TestStats":{avg_duration_pass:[0,2,1,""],date:[0,2,1,""],distro:[0,2,1,""],num_fail:[0,2,1,""],num_pass:[0,2,1,""],task_name:[0,2,1,""],test_file:[0,2,1,""],test_name:[0,2,1,""],variant:[0,2,1,""]},"evergreen.task":{Artifact:[0,1,1,""],OomTrackerInfo:[0,1,1,""],StatusDetails:[0,1,1,""],StatusScore:[0,1,1,""],Task:[0,1,1,""]},"evergreen.task.Artifact":{ignore_for_fetch:[0,2,1,""],name:[0,2,1,""],url:[0,2,1,""],visibility:[0,2,1,""]},"evergreen.task.OomTrackerInfo":{detected:[0,2,1,""],pids:[0,2,1,""]},"evergreen.task.StatusDetails":{desc:[0,2,1,""],oom_tracker_info:[0,2,1,""],status:[0,2,1,""],timed_out:[0,2,1,""],type:[0,2,1,""]},"evergreen.task.StatusScore":{FAILURE:[0,3,1,""],FAILURE_SYSTEM:[0,3,1,""],FAILURE_TIMEOUT:[0,3,1,""],SUCCESS:[0,3,1,""],UNDISPATCHED:[0,3,1,""],get_task_status_score:[0,2,1,""]},"evergreen.task.Task":{activated:[0,2,1,""],activated_by:[0,2,1,""],annotate:[0,2,1,""],artifacts:[0,2,1,""],build_id:[0,2,1,""],build_variant:[0,2,1,""],create_time:[0,2,1,""],depends_on:[0,2,1,""],dispatch_time:[0,2,1,""],display_name:[0,2,1,""],display_only:[0,2,1,""],display_status:[0,2,1,""],distro_id:[0,2,1,""],est_wait_to_start_ms:[0,2,1,""],execution:[0,2,1,""],execution_tasks:[0,2,1,""],expected_duration_ms:[0,2,1,""],finish_time:[0,2,1,""],generate_task:[0,2,1,""],generated_by:[0,2,1,""],get_execution:[0,2,1,""],get_execution_or_self:[0,2,1,""],get_execution_tasks:[0,2,1,""],get_manifest:[0,2,1,""],get_oom_pids:[0,2,1,""],get_project_identifier:[0,2,1,""],get_status_score:[0,2,1,""],get_task_annotation:[0,2,1,""],get_tests:[0,2,1,""],has_oom:[0,2,1,""],host_id:[0,2,1,""],ingest_time:[0,2,1,""],is_active:[0,2,1,""],is_success:[0,2,1,""],is_system_failure:[0,2,1,""],is_test_failure:[0,2,1,""],is_timeout:[0,2,1,""],is_undispatched:[0,2,1,""],log_map:[0,2,1,""],mainline:[0,2,1,""],order:[0,2,1,""],priority:[0,2,1,""],project_id:[0,2,1,""],restarts:[0,2,1,""],retrieve_log:[0,2,1,""],revision:[0,2,1,""],scheduled_time:[0,2,1,""],start_time:[0,2,1,""],status:[0,2,1,""],status_details:[0,2,1,""],stream_log:[0,2,1,""],task_group:[0,2,1,""],task_group_max_hosts:[0,2,1,""],task_id:[0,2,1,""],time_taken_ms:[0,2,1,""],version_id:[0,2,1,""],wait_time:[0,2,1,""],wait_time_once_unblocked:[0,2,1,""]},"evergreen.task_annotations":{IssueLink:[0,1,1,""],Note:[0,1,1,""],Source:[0,1,1,""],TaskAnnotation:[0,1,1,""]},"evergreen.task_annotations.IssueLink":{issue_key:[0,2,1,""],source:[0,2,1,""],url:[0,2,1,""]},"evergreen.task_annotations.Note":{message:[0,2,1,""],source:[0,2,1,""]},"evergreen.task_annotations.Source":{author:[0,2,1,""],requester:[0,2,1,""],time:[0,2,1,""]},"evergreen.task_annotations.TaskAnnotation":{issues:[0,2,1,""],metadata:[0,2,1,""],note:[0,2,1,""],suspected_issues:[0,2,1,""],task_execution:[0,2,1,""],task_id:[0,2,1,""]},"evergreen.task_reliability":{TaskReliability:[0,1,1,""]},"evergreen.task_reliability.TaskReliability":{avg_duration_pass:[0,2,1,""],distro:[0,2,1,""],num_failed:[0,2,1,""],num_setup_failed:[0,2,1,""],num_success:[0,2,1,""],num_system_failed:[0,2,1,""],num_test_failed:[0,2,1,""],num_timeout:[0,2,1,""],num_total:[0,2,1,""],success_rate:[0,2,1,""],task_name:[0,2,1,""],test_file:[0,2,1,""],variant:[0,2,1,""]},"evergreen.tst":{Logs:[0,1,1,""],Tst:[0,1,1,""]},"evergreen.tst.Logs":{line_num:[0,2,1,""],log_id:[0,2,1,""],stream:[0,2,1,""],url:[0,2,1,""],url_raw:[0,2,1,""]},"evergreen.tst.Tst":{end_time:[0,2,1,""],exit_code:[0,2,1,""],logs:[0,2,1,""],start_time:[0,2,1,""],status:[0,2,1,""],task_id:[0,2,1,""],test_file:[0,2,1,""]},"evergreen.util":{evergreen_input_to_output:[0,4,1,""],format_evergreen_date:[0,4,1,""],format_evergreen_datetime:[0,4,1,""],iterate_by_time_window:[0,4,1,""],parse_evergreen_date:[0,4,1,""],parse_evergreen_datetime:[0,4,1,""],parse_evergreen_short_datetime:[0,4,1,""]},"evergreen.version":{BuildVariantStatus:[0,1,1,""],RecentVersionRow:[0,1,1,""],RecentVersions:[0,1,1,""],Requester:[0,1,1,""],Version:[0,1,1,""]},"evergreen.version.BuildVariantStatus":{build_id:[0,2,1,""],build_variant:[0,2,1,""],get_build:[0,2,1,""]},"evergreen.version.RecentVersionRow":{build_variant:[0,2,1,""],builds:[0,2,1,""]},"evergreen.version.RecentVersions":{build_variants:[0,2,1,""],row_map:[0,2,1,""],rows:[0,2,1,""],versions:[0,2,1,""]},"evergreen.version.Requester":{AD_HOC:[0,3,1,""],GITHUB_PULL_REQUEST:[0,3,1,""],GITTER_REQUEST:[0,3,1,""],MERGE_TEST:[0,3,1,""],PATCH_REQUEST:[0,3,1,""],TRIGGER_REQUEST:[0,3,1,""],UNKNOWN:[0,3,1,""],evg_value:[0,2,1,""],stats_value:[0,2,1,""]},"evergreen.version.Version":{author:[0,2,1,""],author_email:[0,2,1,""],branch:[0,2,1,""],build_by_variant:[0,2,1,""],build_variants_status:[0,2,1,""],create_time:[0,2,1,""],errors:[0,2,1,""],finish_time:[0,2,1,""],get_builds:[0,2,1,""],get_manifest:[0,2,1,""],get_metrics:[0,2,1,""],get_modules:[0,2,1,""],get_patch:[0,2,1,""],ignored:[0,2,1,""],is_completed:[0,2,1,""],is_patch:[0,2,1,""],message:[0,2,1,""],order:[0,2,1,""],project:[0,2,1,""],repo:[0,2,1,""],requester:[0,2,1,""],revision:[0,2,1,""],start_time:[0,2,1,""],status:[0,2,1,""],version_id:[0,2,1,""],warnings:[0,2,1,""]},evergreen:{alias:[0,0,0,"-"],api:[0,0,0,"-"],api_requests:[0,0,0,"-"],base:[0,0,0,"-"],build:[0,0,0,"-"],commitqueue:[0,0,0,"-"],config:[0,0,0,"-"],distro:[0,0,0,"-"],errors:[1,0,0,"-"],host:[0,0,0,"-"],manifest:[0,0,0,"-"],metrics:[2,0,0,"-"],patch:[0,0,0,"-"],performance_results:[0,0,0,"-"],project:[0,0,0,"-"],resource_type_permissions:[0,0,0,"-"],stats:[0,0,0,"-"],task:[0,0,0,"-"],task_annotations:[0,0,0,"-"],task_reliability:[0,0,0,"-"],tst:[0,0,0,"-"],util:[0,0,0,"-"],version:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"300":0,"439fe0":0,"class":[0,2],"default":0,"enum":0,"function":[0,2],"import":[3,6],"int":0,"new":0,"return":[0,2],"short":[0,3],"static":0,"true":[0,3],AWS:0,For:0,IDs:0,One:3,The:[0,3],There:3,These:3,Useful:0,Will:0,_baseevergreenobject:0,_id:0,abort:0,abort_task:0,about:[0,2],accept:[0,2],acceptable_host_idle_tim:0,access:[0,3],activ:0,activated_bi:0,activated_tim:0,activetaskmetricsexcept:1,actual_makespan_m:0,ad_hoc:0,add:0,added:[0,3],addit:[0,3],adhoc:0,admin:0,after:[0,3],after_d:0,against:0,aggreg:0,alia:5,alias:0,alias_for_vers:0,all:[0,3,4],all_distro:0,all_host:0,all_project:[0,3],allow:[0,3],alreadi:3,also:[0,3],ami:0,amount:3,ani:[0,3],annot:0,annotate_task:0,api:[4,5],api_kei:[0,3],api_request:5,api_serv:0,arch:0,argument:[0,2],around:[3,4],arrai:0,artifact:0,as_dict:[0,2],assert:3,associ:0,attach:0,attempt:0,attrib_nam:0,attribut:[0,3],auth:[0,3],authent:[0,3],author:0,author_email:0,author_icon:0,author_nam:0,autocomplet:3,avail:0,avg_duration_pass:0,avg_duration_success:0,awai:3,aws_access_key_id:0,aws_access_secret_id:0,awsdistroset:0,back:0,backward:0,base:[1,2,5],base_own:0,base_repo:0,basemodel:0,batch:0,batch_tim:0,been:[0,3],befor:[0,3],before_d:0,being:3,belong:0,bid_pric:0,bodi:0,bool:[0,2],bootstrap_method:0,branch:0,branch_nam:0,build:[2,4,5],build_by_id:0,build_by_vari:0,build_id:0,build_vari:0,build_variants_statu:0,buildmetr:[0,5],builds_by_vers:0,buildvariantstatu:0,cach:0,cachedevergreenapi:0,calcul:[0,2],call:[0,3],callabl:[0,2],caller:0,can:[0,3,4],certain:0,chang:0,channel:0,check:0,child:2,chronolog:0,classmethod:0,clear:0,clear_cach:0,client:[0,1,3],client_dir:0,clock:2,clone_method:0,code:0,collect:[0,1],color:0,com:0,come:1,command:3,commit:0,commit_hash:0,commit_messag:0,commit_queu:0,commit_queue_for_project:0,commitqueu:5,commitqueueitem:0,common:6,communication_method:0,complet:[0,2],config:[3,5],config_fil:[0,3],configur:0,configure_patch:0,configure_task:0,configureschedul:0,connect:0,constantli:3,consum:0,contain:0,container_pool:0,content:[4,5],context:3,conveni:0,convert:0,count:0,creat:[0,2,3],create_tim:[0,2],curator_dir:0,current:0,danger:0,data:[0,3],date:0,datetim:0,deactivate_previ:0,deactivated_previ:0,delet:0,depend:0,depends_on:0,desc:0,descript:0,design:4,detail:[0,3],detect:0,determin:0,develop:3,device_nam:0,dict:[0,2],dictionari:[0,2],diff:0,diff_link:0,diplai:4,disabl:0,dispatch:0,dispatch_tim:0,displai:[0,2],display_nam:[0,3],display_onli:0,display_statu:0,display_task:[0,2],displaytask:0,displaytaskalia:0,distro:5,distro_id:0,docker:0,dockerdistroset:0,document:[0,3],doe:[0,3],don:0,done:3,durat:2,dure:1,each:3,earlier:0,earliest:0,easili:4,editor:[0,3],either:0,els:0,empti:0,enabl:0,end:0,end_tim:[0,2],endpoint:[0,3],enough:0,entri:0,error:[0,3,5],est_wait_to_start_m:0,evergreen:[5,6],evergreen_input_to_output:0,evergreenapi:[0,3,6],evergreenexcept:1,evg_api:[3,6],evg_attrib:0,evg_dat:0,evg_date_attrib:0,evg_datetime_attrib:0,evg_sess:3,evg_short_datetime_attrib:0,evg_valu:0,evgauth:[0,3],exampl:6,except:[0,5],execut:0,execution_task:0,executiontask:0,exist:0,exit_cod:0,expans:0,expected_duration_m:0,extra:0,fail:[0,2,3,4],failur:[0,2,3],failure_system:0,failure_timeout:0,fallback:0,fals:[0,2],fashion:3,featur:3,feel:3,fetch:0,fetch_all_execut:0,field:0,file:0,file_diff:0,file_nam:0,filediff:0,filenam:0,filter:[0,2],filter_fn:0,finder:0,finder_set:0,finderset:0,finish:0,finish_tim:0,first:[0,2,3],format:[0,3],format_evergreen_d:0,format_evergreen_datetim:0,found:0,free:3,from:[0,1,3,4],gener:0,generate_task:0,generated_bi:0,get:[0,2,4,6],get_api:[0,3,6],get_auth:0,get_auth_from_config:0,get_build:0,get_execut:0,get_execution_or_self:0,get_execution_task:0,get_manifest:0,get_metr:0,get_modul:0,get_oom_pid:0,get_patch:0,get_project_identifi:0,get_status_scor:0,get_task:0,get_task_annot:0,get_task_status_scor:0,get_test:[0,6],get_vers:0,git_hash:0,github:0,github_patch_data:0,github_pull_request:0,githubpatchdata:0,gitter_request:0,give:0,give_permissions_to_us:0,given:[0,2,4],goal:3,good:0,grant:0,green:0,group:0,group_bi:0,group_num_dai:0,group_vers:0,happen:3,has:[0,3],has_oom:0,have:[0,3,6],head_hash:0,head_own:0,head_repo:0,help:4,hex:0,histori:0,host:5,host_id:0,host_typ:0,host_url:0,hostdistro:0,how:0,howev:3,html_link:0,http:[0,3],human:0,icon:0,identifi:0,ignor:0,ignore_for_fetch:0,image_id:0,image_url:0,inact:0,inactiv:0,includ:[0,2,3],include_children:2,include_dep:0,incomplet:3,index:[0,4],indic:0,info:0,inform:0,ingest_tim:0,input_d:0,instal:4,instanc:0,instance_typ:0,integ:0,intenum:0,interact:0,intermitt:3,introduc:3,ipv6:0,irc:0,is_act:0,is_complet:0,is_patch:0,is_success:0,is_system_failur:0,is_test_failur:0,is_timeout:0,is_undispatch:0,is_vpc:0,issu:0,issue_kei:0,issuelink:0,issuelinkrequest:0,item:0,iter:0,iterate_by_time_window:0,jasper_credentials_path:0,jit:3,json:[0,3],json_by_task:0,json_history_for_task:0,json_kei:0,just:3,kei:0,key_nam:0,known:0,lag:3,last:2,later:0,latest:0,like:[0,3],limit:0,line:3,line_num:0,link:0,list:[0,6],locat:[0,3],log:0,log_id:0,log_map:0,log_nam:0,log_url:0,look:0,lot:3,mai:3,main:0,mainlin:0,make:[0,3],makespan:2,manag:3,mani:3,manifest:5,manifest_for_task:0,manifestmodul:0,map:0,markdown:0,match:0,maximum_host:0,mean_valu:0,meant:3,measur:0,merge_test:0,messag:0,metadata:0,method:[0,3],metric:[0,1,5],metricsexcept:1,minimum_host:0,mobil:0,model:0,modern:3,modul:[4,5],module_code_chang:0,modulecodechang:0,mongodb:0,more:[0,3],most:0,most_recent_vers:0,mostli:3,mount:0,mount_point:0,mountpoint:0,mrkdwn_in:0,msg:[0,1],my_us:3,name:0,nativ:3,network:0,none:[0,1,2],normal:3,note:0,noth:0,notif:0,num_fail:0,num_pass:0,num_setup_fail:0,num_success:0,num_system_fail:0,num_test_fail:0,num_timeout:0,num_tot:0,number:[0,3],object:[0,2,4],occassion:3,onc:0,one:0,onli:0,oom:0,oom_tracker_info:0,oomtrackerinfo:0,oper:6,option:[0,1,2],order:0,origin:0,other:0,out:6,output:0,over:0,owner:0,owner_nam:0,packag:[4,5],page:[0,4],pagin:0,param:0,paramet:[0,2],parent:0,parse_evergreen_d:0,parse_evergreen_datetim:0,parse_evergreen_short_datetim:0,part:[0,3],particular:0,pass:[0,6],patch:5,patch_by_id:0,patch_id:0,patch_numb:0,patch_request:0,patch_zipper_factor:0,patches_by_project:0,patches_by_project_time_window:0,patches_by_us:0,path:3,pct_display_tasks_fail:2,pct_display_tasks_success:2,pct_display_tasks_system_failur:2,pct_display_tasks_timed_out:2,pct_display_tasks_undispatch:2,pct_tasks_fail:2,pct_tasks_failur:2,pct_tasks_success:2,pct_tasks_system_failur:2,pct_tasks_timed_out:2,pct_tasks_timeout:2,pct_tasks_undispatch:2,per:0,percentag:2,perf:0,perform:0,performance_result:5,performance_results_by_task:0,performance_results_by_task_nam:0,performancedata:0,performancetestbatch:0,performancetestresult:0,performancetestrun:0,permiss:0,permissionableresourcetyp:0,permissions_for_us:0,philosophi:4,pid:0,pip:4,plain:0,planner:0,planner_set:0,plannerset:0,point:0,pool_siz:0,pr_number:0,pr_testing_en:0,predicted_makespan_m:0,present:0,print:6,prioriti:0,privat:0,progress:1,project:[3,5],project_by_id:[0,3],project_filter_fn:0,project_id:0,project_patch:0,project_task:0,properti:[0,2,3],provid:[0,2,3],provis:0,publish:0,put:3,pydant:0,python:[0,3,4],queri:0,queue:0,queue_id:0,rather:3,raw:[0,3],raw_link:0,read:0,read_evergreen_config:0,read_evergreen_from_fil:0,readabl:0,recent:0,recent_vers:0,recent_versions_by_project:0,recentvers:0,recentversionrow:0,recorded_valu:0,red:0,refer:[0,3],region:0,reliabl:0,remote_path:0,repo:0,repo_nam:0,report:0,repres:0,represent:[0,2],request:[0,3],requestor:0,requir:[0,3],resourc:0,resource_typ:0,resource_type_permiss:5,resourcetypepermiss:0,respons:0,rest:[0,3],restart:0,restart_task:0,result:[0,3],retri:[0,3],retriev:0,retrieve_log:0,retrieve_task_log:0,retryingevergreenapi:[0,3],revis:0,row:0,row_map:0,run:0,running_task:0,runningtask:0,same:3,sampl:4,scheduled_tim:0,score:0,script:3,search:[0,4],second:2,security_group:0,security_group_id:0,see:0,seen:[0,3],select:0,self:[0,2],send:0,send_slack_messag:0,sent:0,server:0,session:0,set:0,setup:0,setup_as_sudo:0,sever:3,share:[0,3],shell_path:0,shorten:0,should:[0,2,3],show:0,side:0,sinc:0,single_test_by_task_and_test_fil:0,size:0,slack:0,slackattach:0,slackattachmentfield:0,some:6,sort:0,sourc:[0,1,2],specif:0,specifi:[0,3],src:4,ssh_kei:0,ssh_option:0,start:[0,2,4],start_at:0,start_tim:[0,2],started_bi:0,stat:5,staticdistroset:0,statist:0,stats_valu:0,statu:[0,6],status:0,status_count:0,status_detail:0,statuscount:0,statusdetail:0,statusscor:0,step:3,storage_engin:0,storageengin:0,str:[0,1],stream:0,stream_log:0,string:0,submodul:5,subnet_id:0,subpackag:5,succeed:0,success:[0,2],success_r:0,summari:0,superus:0,support:0,suspect:0,suspected_issu:0,system:[0,2],tabl:0,tag:0,taken:0,target:0,target_tim:0,task:[1,2,4,5],task_annot:5,task_by_id:[0,6],task_execut:0,task_filter_fn:[0,2],task_group:0,task_group_max_host:0,task_id:[0,6],task_id_1:6,task_list_for_vari:0,task_nam:0,task_ord:0,task_reli:5,task_reliability_by_project:0,task_stats_by_project:0,taskannot:0,taskreli:0,tasks_by_build:0,tasks_by_project:0,tasks_by_project_and_commit:0,taskstat:0,teardown:0,tend:3,test:[0,4],test_batch:0,test_fil:[0,6],test_nam:0,test_result:0,test_run:0,test_runs_match:0,test_stats_by_project:0,test_task:0,test_task_vari:0,tests_by_task:0,teststat:0,text:0,than:[0,3],thi:[0,3,6],thin:[3,4],thread_level:0,three:3,thu:3,time:[0,2,3],time_attr:0,time_taken_m:0,timed_out:0,timedelta:[0,2],timeout:[0,2],timestamp:0,titl:0,title_link:0,tool:[3,4],total:2,total_display_task:2,total_task:2,track:0,tracker:0,tracks_push_ev:0,treat:3,trigger:0,trigger_request:0,tst:5,tupl:0,turn:0,type:0,type_fn:0,unblock:0,under:0,understand:0,undispatch:[0,2],union:0,unknown:0,until:[0,2],updat:[0,3],url:0,url_raw:0,usag:[0,4],use:[0,3],use_config_fil:[0,3],used:[0,3],user:0,user_data:0,user_host:0,user_id:0,user_spawn_allow:0,usernam:[0,3],using:[0,3,4,6],util:5,valu:0,variant:0,variantalia:0,variants_task:0,variantstask:0,version:[2,5],version_by_id:0,version_id:0,versionmetr:[0,5],versions_by_project:[0,3],versions_by_project_time_window:0,via:0,virtual_nam:0,visibl:0,vpc_name:0,wai:3,wait_tim:[0,2],wait_time_once_unblock:0,wall:2,warn:0,what:0,when:[0,1,3],where:0,whether:0,who:0,whose:0,wiki:0,window:0,wish:3,with_sess:[0,3],within:0,work:[0,3],work_dir:0,workload:0,would:[0,3,6],wrapper:[0,4],yellow:0,yield:0,you:[3,6]},titles:["evergreen package","evergreen.errors package","evergreen.metrics package","Getting started with evergreen.py","evergreen.py documentation","src","Sample Usages"],titleterms:{"function":3,"new":3,alia:0,all:6,api:[0,3],api_request:0,base:0,build:0,buildmetr:2,commitqueu:0,config:0,configur:3,content:[0,1,2],credenti:3,design:3,diplai:6,directli:3,distro:0,document:4,error:1,evergreen:[0,1,2,3,4],except:1,fail:6,field:3,file:3,from:6,get:3,given:6,host:0,indic:4,manifest:0,metric:2,miss:3,modul:[0,1,2],object:3,packag:[0,1,2],pass:3,patch:0,performance_result:0,philosophi:3,project:0,resource_type_permiss:0,sampl:6,session:3,special:3,src:5,start:3,stat:0,submodul:[0,1,2],subpackag:0,task:[0,6],task_annot:0,task_reli:0,test:6,tst:0,type:3,usag:6,util:0,version:0,versionmetr:2,via:3}})